fn bad(x: u32) -> char {
    unsafe { std::mem::transmute::<u32, char>(x) }
}
