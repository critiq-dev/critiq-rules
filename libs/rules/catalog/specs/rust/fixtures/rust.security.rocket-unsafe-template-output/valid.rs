use rocket::serde::json::Json;

#[rocket::get("/x/<msg>")]
fn x(msg: String) -> Json<String> {
    Json(msg)
}
