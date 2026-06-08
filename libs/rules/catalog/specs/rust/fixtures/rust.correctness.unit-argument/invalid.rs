fn foo<T: std::fmt::Debug>(_t: T) {}

fn test() {
    let v = vec![1].extend(&[2, 3]);
    foo(v);
}
