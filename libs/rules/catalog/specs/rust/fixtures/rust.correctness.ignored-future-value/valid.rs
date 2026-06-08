async fn fetch_config() -> String {
    "config".to_string()
}

async fn load() {
    fetch_config().await;
}
