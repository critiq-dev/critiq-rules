use tokio::sync::Mutex;

async fn handler() {
    let data = Mutex::new(Vec::<u8>::new());
    let _ = data;
}
