fn good(x: &u8) -> &u8 {
    x
}

fn safe_ref() {
    let x = 42u8;
    let r: &u8 = &x;
}
