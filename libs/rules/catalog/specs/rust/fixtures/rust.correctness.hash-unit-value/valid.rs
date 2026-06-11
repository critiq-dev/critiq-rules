fn good() {
    use std::hash::{Hash, Hasher};
    let mut hasher = std::collections::hash_map::DefaultHasher::new();
    42u32.hash(&mut hasher);
}
