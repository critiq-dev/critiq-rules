fn main() {
    fn foo() {}
    let _ = foo as *const ();
}
