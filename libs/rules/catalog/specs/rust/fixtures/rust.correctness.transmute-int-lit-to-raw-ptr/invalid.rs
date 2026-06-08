fn bad() {
    let ptr: *const u8 = unsafe { std::mem::transmute::<usize, *const u8>(0usize) };
}
