#[tokio::test]
async fn tokio_sleep_is_safe() {
    tokio::time::sleep(std::time::Duration::from_millis(500)).await;
    assert_eq!(1, 1);
}

#[test]
fn short_sleep_is_allowed() {
    std::thread::sleep(std::time::Duration::from_millis(50));
    assert_eq!(1, 1);
}

#[test]
fn no_sleep_at_all() {
    assert_eq!(1, 1);
}
