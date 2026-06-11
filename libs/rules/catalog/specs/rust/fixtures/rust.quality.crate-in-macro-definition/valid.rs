macro_rules! my_macro {
    ($x:expr) => {
        $crate::my_fn($x);
    };
}
