fn good(x: (u16, u16)) -> [u8; 4] {
    let (hi, lo) = x;
    [hi as u8, (hi >> 8) as u8, lo as u8, (lo >> 8) as u8]
}
