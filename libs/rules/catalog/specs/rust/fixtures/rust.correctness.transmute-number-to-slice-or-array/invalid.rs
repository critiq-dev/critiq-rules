fn bad(x: u32) -> [u8; 4] {
    unsafe { std::mem::transmute::<u32, [u8; 4]>(x) }
}
