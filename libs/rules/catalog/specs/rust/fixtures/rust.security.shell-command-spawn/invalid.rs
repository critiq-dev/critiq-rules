use std::process::Command;

fn run(user_cmd: &str) {
    let _ = Command::new("sh").arg("-c").arg(user_cmd);
}
