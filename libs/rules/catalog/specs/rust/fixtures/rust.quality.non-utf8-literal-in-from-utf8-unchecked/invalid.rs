fn main() {
    let s = unsafe { str::from_utf8_unchecked(b"hello\xffworld") };
    let _ = s;
}
