fn main() {
    let x: &i32 = &42;
    let s = std::mem::size_of_val(&x);
    let _ = s;
}
