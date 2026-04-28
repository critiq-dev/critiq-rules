fn load_secret() {
    let api_secret = std::env::var("API_SECRET").unwrap();
    let _ = api_secret;
}
