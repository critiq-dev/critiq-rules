fn main() {
    let mut val = String::from("hello");
    let _ = std::mem::replace(&mut val, Default::default());
}
