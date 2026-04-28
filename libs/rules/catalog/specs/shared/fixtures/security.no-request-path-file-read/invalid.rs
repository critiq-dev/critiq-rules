fn load(req: Request) {
    let report = req.query_string();
    let _ = std::fs::read_to_string(report);
}
