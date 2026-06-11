fn main() {
    let x = unsafe { std::mem::uninitialized::<i32>() };
    let _ = x;
    static INIT: std::sync::Once = std::sync::ONCE_INIT;
    let _ = INIT;
}

fn old_thread() {
    std::thread::sleep_ms(100);
}

fn old_atomic() {
    static VAL: std::sync::atomic::AtomicBool = std::sync::atomic::ATOMIC_BOOL_INIT;
    let _ = VAL;
}
