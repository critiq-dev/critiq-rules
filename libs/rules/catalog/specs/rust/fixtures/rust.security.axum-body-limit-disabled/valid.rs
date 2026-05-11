use axum::Router;

pub fn app() -> Router {
    Router::new().layer(axum::extract::DefaultBodyLimit::max(2 * 1024 * 1024))
}
