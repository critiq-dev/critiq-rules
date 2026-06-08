fn test() {
    let x: Vec<u32> = Vec::with_capacity(10);
    std::mem::forget(&x);
    std::mem::drop(&x);
}
