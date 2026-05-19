fn read(items: &[u8], index: usize) -> Option<u8> {
    items.get(index).copied()
}
