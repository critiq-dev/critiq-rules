fn main() {
    let mut val = 42;
    let _ = std::mem::take(&mut val);
}
