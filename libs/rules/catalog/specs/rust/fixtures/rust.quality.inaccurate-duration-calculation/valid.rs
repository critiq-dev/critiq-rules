fn main() {
    let dur = std::time::Duration::from_secs(5);
    let millis = dur.subsec_millis();
    let _ = millis;
}
