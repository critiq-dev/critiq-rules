fn main() {
    let items = vec![1, 2, 3];
    for (idx, val) in items.iter().enumerate() {
        println!("{}: {}", idx, val);
    }
}
