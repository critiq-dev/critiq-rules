fn bad(r: &u8) -> *const u8 {
    unsafe { std::mem::transmute::<&u8, *const u8>(r) }
}
