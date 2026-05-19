use std::process::Command;

fn run(path: &str) {
    let _ = Command::new("git").arg("status").arg(path);
}
