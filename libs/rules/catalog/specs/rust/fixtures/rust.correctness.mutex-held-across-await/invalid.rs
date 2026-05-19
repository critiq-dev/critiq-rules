use std::sync::Mutex;

async fn handler(data: Mutex<Vec<u8>>) {
    let guard = data.lock().unwrap();
    other().await;
    let _ = guard.len();
}

async fn other() {}
