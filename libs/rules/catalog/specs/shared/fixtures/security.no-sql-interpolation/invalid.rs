fn load(req: Request, client: Client) {
    let email = req.query_string();
    let query = format!("SELECT * FROM users WHERE email = '{}'", email);
    client.query(query);
}
