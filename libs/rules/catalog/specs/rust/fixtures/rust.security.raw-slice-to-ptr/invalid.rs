fn to_raw_ptr(data: &[u8]) -> *const u8 {
    &data[..] as *const u8
}

fn to_mut_raw_ptr(data: &mut [u8]) -> *mut u8 {
    &mut data[..] as *mut u8
}
