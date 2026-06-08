fn test() {
    let x = 42;
    std::mem::forget(x);
    std::mem::drop(x);
}
