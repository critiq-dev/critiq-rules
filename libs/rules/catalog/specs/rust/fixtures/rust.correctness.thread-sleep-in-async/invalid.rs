use std::time::Duration;

async fn wait() {
    std::thread::sleep(Duration::from_millis(10));
}
