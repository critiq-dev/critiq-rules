fn main() {
    let mut val = String::from("hello");
    let _ = std::mem::take(&mut val);
}
