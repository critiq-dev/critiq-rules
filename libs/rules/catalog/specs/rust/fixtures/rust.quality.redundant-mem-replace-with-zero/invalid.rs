fn main() {
    let mut val = 42;
    let _ = std::mem::replace(&mut val, 0);
}
