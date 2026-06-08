fn foo<T: std::fmt::Debug>(_t: T) {}

fn test() {
    let mut v = vec![1];
    v.extend(&[2, 3]);
    foo("not a unit");
}
