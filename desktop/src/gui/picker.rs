use super::text;
use crate::preferences::GlobalPreferences;
use rfd::AsyncFileDialog;
use ruffle_frontend_utils::{bundle::Bundle, content::PlayingContent};
use std::{
    io::{Read, Seek, SeekFrom},
    path::PathBuf,
    sync::{
        atomic::{AtomicBool, Ordering},
        Arc, Weak,
    },
};
use url::Url;
use walkdir::{DirEntry, WalkDir};
use winit::window::Window;

#[derive(Clone)]
pub struct FilePicker {
    data: Arc<FilePickerData>,
}

struct FilePickerData {
    parent: Weak<Window>,
    picking: AtomicBool,
    preferences: GlobalPreferences,
}

impl FilePicker {
    pub fn new(parent: Weak<Window>, preferences: GlobalPreferences) -> Self {
        Self {
            data: Arc::new(FilePickerData {
                parent,
                picking: AtomicBool::new(false),
                preferences,
            }),
        }
    }

    pub async fn pick_ruffle_file(&self, dir: Option<PathBuf>) -> Option<PathBuf> {
        let locale = &self.data.preferences.language();
        let mut dialog = AsyncFileDialog::new()
            .add_filter(
                text(locale, "file-picker-filter-supported"),
                &["swf", "spl", "ruf"],
            )
            .add_filter(text(locale, "file-picker-filter-swf"), &["swf"])
            .add_filter(text(locale, "file-picker-filter-spl"), &["spl"])
            .add_filter(text(locale, "file-picker-filter-ruf"), &["ruf"])
            .add_filter(text(locale, "file-picker-filter-all"), &["*"])
            .set_title(text(locale, "file-picker-title-open-file"));

        if let Some(dir) = dir {
            dialog = dialog.set_directory(dir);
        }

        if let Some(result) = self.show_dialog(dialog, |d| d.pick_file()) {
            result.await.map(|h| h.into())
        } else {
            None
        }
    }

    pub fn show_dialog<F, O>(&self, mut dialog: AsyncFileDialog, f: F) -> Option<O>
    where
        F: FnOnce(AsyncFileDialog) -> O,
    {
        if let Some(parent) = self.data.parent.upgrade() {
            dialog = dialog.set_parent(&parent);
        }

        if self.data.picking.swap(true, Ordering::SeqCst) {
            // Already picking
            return None;
        }
        let result = f(dialog);
        self.data.picking.store(false, Ordering::SeqCst);
        Some(result)
    }

    pub async fn pick_directory(&self, dir: Option<PathBuf>) -> Option<PlayingContent> {
        let mut dialog = AsyncFileDialog::new().set_title("Open a Folder");

        if let Some(ref dir) = dir {
            dialog = dialog.set_directory(dir);
        }

        if let Some(parent) = self.data.parent.upgrade() {
            dialog = dialog.set_parent(&parent);
        }

        let directory: PathBuf = dialog.pick_folder().await?.into();

        // Try opening a bundle...
        match Bundle::from_path(&directory) {
            Ok(bundle) => {
                let url = bundle.information().url.clone();
                return Some(PlayingContent::Bundle(url, bundle));
            }
            Err(err) => {
                tracing::info!("The opened directory is not a bundle: {err}");
            }
        }

        let files: Vec<DirEntry> = WalkDir::new(&directory)
            .into_iter()
            .filter_map(Result::ok)
            .filter(|e| e.file_type().is_file())
            .collect();

        // If there's only one SWF in the directory, treat is as the root...
        let mut files: Vec<&DirEntry> = files.iter()
            .filter(|e| e.file_name().as_encoded_bytes().ends_with(b".swf"))
            .take(2)
            .collect();
        if files.len() == 1 {
            let file = files.remove(0);
            if let Ok(url) = Url::from_file_path(file.path()) {
                tracing::info!("There's only one .swf file in the directory, treating it as the root: {}", url);
                return Some(PlayingContent::DirectFile(url));
            }
        }

        // Otherwise let the user choose the root movie
        let mut dialog = AsyncFileDialog::new()
            .add_filter("SWF Files", &["swf"])
            .add_filter("All Files", &["*"])
            .set_directory(&directory)
            .set_title("Select Root Movie");

        if let Some(parent) = self.data.parent.upgrade() {
            dialog = dialog.set_parent(&parent);
        }

        let root_movie: PathBuf = dialog.pick_file().await?.into();

        if root_movie.starts_with(&directory) {
            return Url::from_file_path(root_movie)
                .ok()
                .map(PlayingContent::DirectFile);
        }

        // Now when we are sandboxed, selecting a single file might give us a different path.
        // That's why we have to find the path of the selected file inside the directory
        // by comparing filenames and file contents (we cannot use inodes).
        // Alternatively, we could use here a different file picker
        // (non-xdg, which can pick files from inside `directory`).
        let root_movie_name = root_movie.file_name()?;

        use std::fs::File;
        let mut root_movie = File::open(&root_movie).ok()?;

        fn same_file(entry: &DirEntry, root_movie: &mut File) -> Result<bool, std::io::Error> {
            root_movie.seek(SeekFrom::Start(0))?;

            let e_meta = entry.metadata()?;
            let m_meta = root_movie.metadata()?;
            if e_meta.len() != m_meta.len() {
                return Ok(false);
            }

            let mut other_file = File::open(entry.path())?;

            loop {
                const BUF_SIZE: usize = 8 * 1024;
                let mut buf_a = Vec::with_capacity(BUF_SIZE);
                let mut buf_b = Vec::with_capacity(BUF_SIZE);
                let read_a = root_movie.read(&mut buf_a[..])?;
                let read_b = other_file.read(&mut buf_b[..])?;
                if read_a != read_b || buf_a[..read_a] != buf_b[..read_b] {
                    return Ok(false);
                }
                if read_a == 0 {
                    return Ok(true);
                }
            }
        }

        let root_file = WalkDir::new(directory)
            .into_iter()
            .filter_map(Result::ok)
            .filter(|e| e.file_type().is_file())
            .filter(|e| e.file_name().eq(root_movie_name))
            .find(|e| {
                same_file(e, &mut root_movie)
                    .inspect_err(|e| tracing::warn!("Error while looking for root SWF: {e}"))
                    .unwrap_or(false)
            })?;

        Url::from_file_path(root_file.path())
            .ok()
            .map(PlayingContent::DirectFile)
    }
}
