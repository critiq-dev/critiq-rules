fn bad(ptr: *const u8) -> *mut u8 {
    unsafe { std::mem::transmute::<*const u8, *mut u8>(ptr) }
}
