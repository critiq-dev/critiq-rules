use tower_http::cors::CorsLayer;

pub fn layer() -> CorsLayer {
    CorsLayer::very_permissive().allow_credentials(true)
}
