fn main() {
    let x: u64 = 2u64.pow(32);
    let y: u64 = 128u64.pow(16);
    let flags = 0b0010 ^ 0b1000;
    println!("{} {}", x, y);
}
