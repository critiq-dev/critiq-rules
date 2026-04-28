fn load(client: Client, email: &str) {
    client.query("SELECT * FROM users WHERE email = $1", email);
}
