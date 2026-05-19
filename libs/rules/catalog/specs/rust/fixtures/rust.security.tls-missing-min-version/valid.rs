fn client_config() -> rustls::ClientConfig {
    rustls::ClientConfig {
        min_protocol_version: Some(rustls::ProtocolVersion::TLSv1_2),
        root_store: rustls::RootCertStore::empty(),
    }
}
