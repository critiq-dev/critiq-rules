fn load(req: Request) {
    let payload = req.query_string();
    let _ = serde_json::from_str(payload);
}
