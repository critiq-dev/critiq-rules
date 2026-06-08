fn bad() {
    let ptr = unsafe { std::mem::transmute::<usize, fn(i32) -> bool>(0usize) };
}
