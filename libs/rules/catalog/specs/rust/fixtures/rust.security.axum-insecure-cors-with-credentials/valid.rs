use http::HeaderValue;
use tower_http::cors::CorsLayer;

pub fn layer() -> CorsLayer {
    let origin = HeaderValue::from_static("https://app.example.com");
    CorsLayer::new()
        .allow_origin(origin)
        .allow_credentials(true)
}
