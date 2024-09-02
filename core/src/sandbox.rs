//! Security Sandbox implementation, see
//! https://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7e3f.html

use std::marker::PhantomData;

use swf::HeaderExt;
use url::Url;

/// Type of sandbox that defines what a movie can access
/// and how movies interact with each other.
///
/// Note: sandbox type is defined *per SWF*.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum SandboxType {
    /// The movie originates from a remote URL.
    ///
    /// In this case domain-based sandbox rules are used,
    /// no filesystem access.
    Remote,

    /// The movie is a local movie with filesystem access.
    ///
    /// This implies no network access.
    LocalWithFile,

    /// The movie is a local movie with network access.
    ///
    /// This implies no filesystem access.
    LocalWithNetwork,

    /// The movie is a trusted local movie with access to both filesystem and network.
    LocalTrusted,

    /// The movie is an AIR application.
    /// This is the least restrictive sandbox type, allows
    /// both filesystem and network access and can access any domain.
    Application,
}

impl SandboxType {
    /// Detect sandbox type based on SWF URL and its header.
    ///
    /// When the URL is remote, [`SandboxType::Remote`] is used.
    /// When the URL is local, [`SandboxType::LocalWithFile`] or
    /// [`SandboxType::LocalWithNetwork`] is used depending on
    /// the preference from the header.
    pub fn detect(url: &str, header: &HeaderExt) -> Self {
        match Url::parse(url) {
            Ok(url) => {
                if url.scheme() == "file" {
                    if header.use_network_sandbox() {
                        Self::LocalWithNetwork
                    } else {
                        Self::LocalWithFile
                    }
                } else {
                    Self::Remote
                }
            }
            Err(e) => {
                let sandbox_type = Self::LocalWithFile;
                tracing::warn!("Failed to parse URL {url}: {e}, using {sandbox_type:?}");
                sandbox_type
            }
        }
    }
}

/// A sandbox permit is meant to be used as a method parameter
/// and acts as contract between the method caller and callee.
///
/// For the caller, it requires that the [`SandboxManager`]
/// is asked for permission before invoking the method.
/// For the callee, it proves that the caller has asked for the permission.
///
/// Sandbox permit exists as a compile-time check to make sure
/// every method invocation was accompanied by the sandbox policy check,
/// which could have taken place some time earlier.
pub struct SandboxPermit {
    /// Phantom data which ensures that SandboxPermit
    /// cannot be constructed outside of here.
    phantom: PhantomData<()>,
}

impl SandboxPermit {
    fn new() -> Self {
        Self {
            phantom: PhantomData,
        }
    }

    /// Use this method when sandbox policy check is yet unimplemented.
    ///
    /// TODO Remove this method when sandbox is fully implemented.
    pub fn sandbox_unimplemented() -> Self {
        Self::new()
    }

    /// Consume the permit.
    ///
    /// This method should be called at the moment an action
    /// is performed which may be constrained by a sandbox policy.
    ///
    /// This method is meant to be used as a compile check to ensure
    /// that the action was accompanied by the sandbox policy check.
    pub fn consume(self) {
        // Do nothing
    }
}

pub struct SandboxManager {}

impl Default for SandboxManager {
    fn default() -> Self {
        Self::new()
    }
}

impl SandboxManager {
    pub fn new() -> Self {
        Self {}
    }
}
