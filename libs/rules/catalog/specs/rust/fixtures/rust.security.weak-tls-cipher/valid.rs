fn strong_cipher() {
    let _ = rustls::CipherSuite::TLS_AES_128_GCM_SHA256;
    let suites = vec!["TLS_AES_256_GCM_SHA384"];
}
