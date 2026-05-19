async fn leak() {
    std::mem::forget(tokio::spawn(async {}));
}
