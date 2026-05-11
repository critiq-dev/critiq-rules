use axum::Router;

pub fn app() -> Router {
    Router::new().layer(axum::extract::DefaultBodyLimit::disable())
}
