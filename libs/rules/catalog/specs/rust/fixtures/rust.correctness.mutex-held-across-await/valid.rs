use std::sync::Mutex;

async fn handler(data: Mutex<Vec<u8>>) {
    let len = {
        let guard = data.lock().unwrap();
        guard.len()
    };
    other().await;
    let _ = len;
}

async fn other() {}
