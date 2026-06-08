use std::fs;
use std::os::unix::fs::PermissionsExt;

fn set_world_writable(path: &str) -> std::io::Result<()> {
    let perm = fs::PermissionsExt::from_mode(0o777);
    fs::set_permissions(path, perm)
}

fn open_world_writable(path: &str) -> std::fs::File {
    use std::fs::OpenOptions;
    OpenOptions::new()
        .write(true)
        .mode(0o666)
        .open(path)
        .unwrap()
}
