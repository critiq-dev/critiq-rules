use actix_files::NamedFile;
use actix_web::Result;

async fn serve_safe() -> Result<NamedFile> {
    Ok(NamedFile::open("./static/index.html")?)
}

async fn serve_safe_path(path: &str) -> Result<NamedFile> {
    let sanitized = path.strip_prefix("../").unwrap_or(path);
    Ok(NamedFile::open(format!("./static/{}", sanitized))?)
}
