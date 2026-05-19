fn client_config() -> rustls::ClientConfig {
    rustls::ClientConfig {
        root_store: rustls::RootCertStore::empty(),
    }
}
