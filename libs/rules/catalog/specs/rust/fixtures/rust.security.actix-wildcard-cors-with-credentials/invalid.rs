use actix_cors::Cors;

pub fn cors() -> Cors {
    Cors::default()
        .allow_any_origin()
        .supports_credentials()
}
