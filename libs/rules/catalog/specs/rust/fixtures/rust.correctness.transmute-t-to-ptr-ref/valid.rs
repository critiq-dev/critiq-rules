fn good() -> *const u8 {
    let x = 42u8;
    &x as *const u8
}
