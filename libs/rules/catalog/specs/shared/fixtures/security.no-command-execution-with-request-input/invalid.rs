fn run(req: Request) {
    let command = req.query_string();
    let _ = std::process::Command::new("sh").arg(command).output();
}
