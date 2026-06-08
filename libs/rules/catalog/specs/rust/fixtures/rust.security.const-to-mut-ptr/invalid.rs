fn unsafe_cast(ptr: *const u8) -> *mut u8 {
    unsafe {
        ptr as *mut u8
    }
}
