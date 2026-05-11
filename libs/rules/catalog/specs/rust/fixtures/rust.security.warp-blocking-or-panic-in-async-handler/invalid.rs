async fn handler(path: String) -> impl warp::Reply {
    std::fs::read_to_string(path).unwrap_or_default()
}
