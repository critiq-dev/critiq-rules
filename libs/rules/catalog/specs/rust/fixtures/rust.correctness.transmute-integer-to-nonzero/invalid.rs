fn bad(x: i32) -> std::num::NonZeroI32 {
    unsafe { std::mem::transmute::<i32, std::num::NonZeroI32>(x) }
}
