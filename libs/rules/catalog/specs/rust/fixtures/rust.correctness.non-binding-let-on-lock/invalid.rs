use std::sync::Mutex;

fn test() {
    let guard = Mutex::new(0);
    let _ = guard.lock();
}
