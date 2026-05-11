async fn handler(path: String) -> Result<String, std::io::Error> {
    tokio::fs::read_to_string(path).await
}
