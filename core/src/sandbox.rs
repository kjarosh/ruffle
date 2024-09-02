//! Security Sandbox implementation, see
//! https://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7e3f.html

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

/// Every permit emitted by the sandbox manager is valid
/// for a certain scope, which represents the possible
/// set of actions that are permitted.
#[derive(PartialEq, Eq, Debug)]
pub enum SandboxPermitScope {
    /// Any action is permitted.
    ///
    /// TODO Remove
    All,

    /// Local file access is permitted.
    LocalFileAccess,

    /// Network access is permitted.
    NetworkAccess,
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
    scope: SandboxPermitScope,
    active: bool,
}

impl Drop for SandboxPermit {
    fn drop(&mut self) {
        if self.active {
            panic!(
                "Potential Security Sandbox Violation. \
                Security sandbox has detected an ignored permit, \
                which means an action might have been performed \
                which was not covered by security sandbox protections. \
                The permit has to be either consumed or dismissed."
            );
        }
    }
}

impl SandboxPermit {
    fn new(scope: SandboxPermitScope) -> Self {
        Self {
            scope,
            active: true,
        }
    }

    /// Use this method when sandbox policy check is yet unimplemented.
    ///
    /// TODO Remove this method when sandbox is fully implemented.
    pub fn sandbox_unimplemented() -> Self {
        Self {
            scope: SandboxPermitScope::All,
            active: false,
        }
    }

    /// Consume the permit.
    ///
    /// This method should be called right before the moment an action
    /// is performed which may be constrained by a sandbox policy.
    ///
    /// This method is meant to be used as a compile check to ensure
    /// that the action was accompanied by the sandbox policy check.
    /// The scope parameter additionally ensures that the check was
    /// consistent with the actual action that is being performed.
    pub fn consume(mut self, scope: SandboxPermitScope) {
        if self.scope != SandboxPermitScope::All && self.scope != scope {
            panic!(
                "Potential Security Sandbox Violation. \
                Security sandbox has prevented an attempt to \
                perform an action which did not match its permit scope. \
                Expected scope: {:?}, actual scope: {:?}.",
                self.scope, scope,
            );
        }

        self.active = false;
        drop(self);
    }

    /// Dismiss the permit instead of consuming it.
    ///
    /// Use when there's no action to perform.
    pub fn dismiss(mut self) {
        self.active = false;
        drop(self);
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
