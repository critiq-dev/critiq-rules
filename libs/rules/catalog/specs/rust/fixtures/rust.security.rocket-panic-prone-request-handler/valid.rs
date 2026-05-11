use rocket::serde::json::Json;
use rocket::http::Status;

#[rocket::get("/users/<id>")]
fn user(id: String) -> Result<Json<u8>, Status> {
    repo::find_user(id).map(Json).ok_or(Status::NotFound)
}

mod repo {
    pub fn find_user(_: String) -> Option<u8> {
        Some(1)
    }
}
