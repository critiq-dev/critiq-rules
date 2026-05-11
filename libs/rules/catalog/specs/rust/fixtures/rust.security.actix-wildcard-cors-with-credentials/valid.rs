use actix_cors::Cors;

pub fn cors() -> Cors {
    Cors::default()
        .allowed_origin("https://app.example.com")
        .supports_credentials()
}
