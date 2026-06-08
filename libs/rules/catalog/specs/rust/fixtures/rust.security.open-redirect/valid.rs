use actix_web::{HttpResponse, HttpRequest};

async fn safe_redirect() -> HttpResponse {
    HttpResponse::Found()
        .header("Location", "/welcome")
        .finish()
}

fn redirect_to_safe() -> String {
    Redirect::to("/login").to_string()
}
