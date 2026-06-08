fn main() {
    let t: Vec<u8> = vec![1, 2, 3];
    let _v: Vec<u8> = t.iter().map(|x| (*x).clone()).collect();
}
