fn generate() {
    let _ = RsaPrivateKey::new(&mut rng, 1024);
}
