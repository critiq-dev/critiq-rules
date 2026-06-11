fn bad(x: u32) -> *const u8 {
    unsafe { std::mem::transmute::<u32, *const u8>(x) }
}
