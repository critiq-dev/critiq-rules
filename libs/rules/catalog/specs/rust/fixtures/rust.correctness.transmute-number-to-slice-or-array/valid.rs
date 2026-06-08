fn good(x: u32) -> [u8; 4] {
    x.to_be_bytes()
}
