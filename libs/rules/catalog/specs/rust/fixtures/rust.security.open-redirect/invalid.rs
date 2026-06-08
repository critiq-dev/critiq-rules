use actix_web::{HttpResponse, HttpRequest};

async fn unsafe_redirect(req: HttpRequest) -> HttpResponse {
    let dest = req.match_info().query("dest");
    HttpResponse::Found()
        .header("Location", dest)
        .finish()
}

async fn unsafe_redirect_to(dest: String) -> HttpResponse {
    HttpResponse::TemporaryRedirect()
        .header("Location", dest)
        .finish()
}
