fn safe_deref(ptr: *const u8) -> &u8 {
    unsafe {
        &*ptr
    }
}

fn safe_mut(ptr: *mut u8) -> &mut u8 {
    unsafe {
        &mut *ptr
    }
}
