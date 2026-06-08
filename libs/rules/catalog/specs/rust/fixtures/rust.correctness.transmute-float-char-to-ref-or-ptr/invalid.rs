fn bad_float() {
    let r: &u8 = unsafe { std::mem::transmute::<f32, &u8>(0.0_f32) };
}

fn bad_char() {
    let p: *const u8 = unsafe { std::mem::transmute::<char, *const u8>('a') };
}
