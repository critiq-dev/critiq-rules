fn main() {
    let mut opt = Some(42);
    let _ = std::mem::replace(&mut opt, None);
}
