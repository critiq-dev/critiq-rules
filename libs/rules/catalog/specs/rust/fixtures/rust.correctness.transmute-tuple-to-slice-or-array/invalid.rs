fn bad(x: (u16, u16)) -> [u8; 4] {
    unsafe { std::mem::transmute::<(u16, u16), [u8; 4]>(x) }
}
