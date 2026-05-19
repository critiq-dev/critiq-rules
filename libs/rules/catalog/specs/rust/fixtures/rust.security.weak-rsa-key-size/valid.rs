fn generate() {
    let _ = RsaPrivateKey::new(&mut rng, 2048);
}
