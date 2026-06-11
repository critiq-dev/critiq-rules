use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("a", 1);
    for (k, v) in map.iter().sorted() {
        let _ = (k, v);
    }
}
