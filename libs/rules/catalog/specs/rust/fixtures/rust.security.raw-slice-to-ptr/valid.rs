fn safe_ptr(data: &[u8]) -> *const u8 {
    data.as_ptr()
}

fn safe_mut_ptr(data: &mut [u8]) -> *mut u8 {
    data.as_mut_ptr()
}
