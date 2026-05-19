async fn run() {
    let handle = tokio::spawn(async {});
    let _ = handle.await;
}
