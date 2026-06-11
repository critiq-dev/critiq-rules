fn bad(ptr: *const u8) -> &'static u8 {
    unsafe { std::mem::transmute::<*const u8, &u8>(ptr) }
}
