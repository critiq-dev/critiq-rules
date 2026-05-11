use rocket::response::content::RawHtml;

#[rocket::get("/x/<msg>")]
fn x(msg: String) -> RawHtml<String> {
    RawHtml(msg)
}
