fn main() {
    let s = unsafe { str::from_utf8_unchecked(b"hello") };
    let _ = s;
}
