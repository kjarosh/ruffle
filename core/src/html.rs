//! HTML related utilities

mod dimensions;
mod iterators;
mod layout;
mod text_format;

pub use dimensions::BoxBounds;
pub use dimensions::Position;
pub use layout::{LayoutBox, LayoutContent, LayoutMetrics};
pub use stylesheet::{transform_dashes_to_camel_case, CssStream};
pub use text_format::{FormatSpans, TextDisplay, TextFormat, TextSpan};

mod stylesheet;
#[cfg(test)]
mod test;
