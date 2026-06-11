fn bad() {
    use std::hash::{Hash, Hasher};
    let mut hasher = std::collections::hash_map::DefaultHasher::new();
    Hash::hash(&(), &mut hasher);
}
