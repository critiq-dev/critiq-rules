use std::slice;

fn reinterpret(s: *const [u32]) -> *const [u8] {
    s as *const [u8]
}

fn reinterpret_mut(s: *mut [u32]) -> *mut [u8] {
    s as *mut [u8]
}
