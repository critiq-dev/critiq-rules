use std::fs::DirBuilder;
use std::os::unix::fs::DirBuilderExt;

fn test() {
    let mut builder = DirBuilder::new();
    builder.mode(0o755);
    let _ = std::fs::Permissions::from_mode(0o755);
}
