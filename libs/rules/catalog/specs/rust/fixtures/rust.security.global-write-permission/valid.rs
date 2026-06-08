use std::fs;
use std::os::unix::fs::PermissionsExt;

fn set_restrictive(path: &str) -> std::io::Result<()> {
    let perm = fs::PermissionsExt::from_mode(0o600);
    fs::set_permissions(path, perm)
}

fn open_private(path: &str) -> std::fs::File {
    use std::fs::OpenOptions;
    OpenOptions::new()
        .write(true)
        .mode(0o600)
        .open(path)
        .unwrap()
}
