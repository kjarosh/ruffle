use crate::gui::LocalizableText;
use egui::{Align2, Ui, Window};
use std::path::PathBuf;
use tokio::sync::oneshot::Sender;
use unic_langid::LanguageIdentifier;
use walkdir::{DirEntry, WalkDir};

#[derive(PartialEq, Eq, Clone)]
pub enum PickPathDialogResult {
    PickPath(PathBuf),
    Cancel,
}

pub struct PickPathDialogConfiguration {
    notifier: Option<Sender<PickPathDialogResult>>,
    directory: PathBuf,
    title: LocalizableText,
    message: Option<LocalizableText>,
}

impl PickPathDialogConfiguration {
    pub fn new(
        notifier: Sender<PickPathDialogResult>,
        directory: PathBuf,
        title: LocalizableText,
        message: Option<LocalizableText>,
    ) -> Self {
        Self {
            notifier: Some(notifier),
            directory,
            title,
            message,
        }
    }
}

pub struct PickPathDialog {
    config: PickPathDialogConfiguration,
    files: Vec<PathBuf>,
}

impl Drop for PickPathDialog {
    fn drop(&mut self) {
        self.respond(PickPathDialogResult::Cancel);
    }
}

impl PickPathDialog {
    pub fn new(config: PickPathDialogConfiguration) -> Self {
        let files: Vec<DirEntry> = WalkDir::new(&config.directory)
            .into_iter()
            .filter_map(Result::ok)
            .collect();
        Self { config, files }
    }

    fn respond(&mut self, result: PickPathDialogResult) {
        if let Some(notifier) = std::mem::take(&mut self.config.notifier) {
            let _ = notifier.send(result);
        }
    }

    pub fn show(&mut self, locale: &LanguageIdentifier, egui_ctx: &egui::Context) -> bool {
        let mut keep_open = true;
        let mut should_close = false;

        Window::new(self.config.title.localize(locale))
            .open(&mut keep_open)
            .anchor(Align2::CENTER_CENTER, egui::Vec2::ZERO)
            .collapsible(false)
            .show(egui_ctx, |ui| {
                egui::ScrollArea::vertical().show(ui, |ui| {
                    should_close = self.render_window_contents(locale, ui)
                });
            });

        keep_open && !should_close
    }

    pub fn render_window_contents(&mut self, locale: &LanguageIdentifier, ui: &mut Ui) -> bool {
        let mut should_close = false;

        if let Some(message) = self.config.message {
            ui.label(message.localize(locale));
            ui.separator();
        }

        // ui.horizontal(|ui| {
        //     ui.monospace(&self.config.host);
        //     ui.label(text_with_args(
        //         locale,
        //         "network-access-dialog-port",
        //         &HashMap::from([(
        //             "port",
        //             FluentValue::String(self.config.port.to_string().into()),
        //         )]),
        //     ));
        // });
        // ui.label("");

        // ui.horizontal(|ui| {
        //     ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
        //         if ui
        //             .button(text(locale, "network-access-dialog-allow"))
        //             .clicked()
        //         {
        //             self.respond(NetworkAccessDialogResult::Allow);
        //             should_close = true;
        //         }
        //         if ui.button(text(locale, "dialog-cancel")).clicked() {
        //             should_close = true;
        //         }
        //     })
        // });

        should_close
    }
}
