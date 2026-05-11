use rocket::serde::json::Json;

#[rocket::get("/users/<id>")]
fn user(id: String) -> Json<u8> {
    Json(repo::find_user(id).unwrap())
}

mod repo {
    pub fn find_user(_: String) -> Option<u8> {
        Some(1)
    }
}
