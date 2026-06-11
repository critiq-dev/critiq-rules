fn bad(x: i32) -> bool {
    unsafe { std::mem::transmute::<i32, bool>(x) }
}
