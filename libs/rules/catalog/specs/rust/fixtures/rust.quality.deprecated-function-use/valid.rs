fn main() {
    let x = 42;
    let _ = x;
    use std::sync::Once;
    static INIT: Once = Once::new();
    let _ = INIT;
}

fn new_thread() {
    std::thread::sleep(std::time::Duration::from_millis(100));
}

fn new_atomic() {
    static VAL: std::sync::atomic::AtomicBool = std::sync::atomic::AtomicBool::new(false);
    let _ = VAL;
}
