use std::collections::BTreeMap;

fn main() {
    let mut map = BTreeMap::new();
    map.insert("a", 1);
    for (k, v) in map.iter() {
        let _ = (k, v);
    }
}
