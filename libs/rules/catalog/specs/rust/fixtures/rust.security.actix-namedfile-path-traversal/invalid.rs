use actix_files::NamedFile;
use actix_web::{HttpRequest, Result};

async fn serve_file(req: HttpRequest) -> Result<NamedFile> {
    let path = req.match_info().query("filename");
    Ok(NamedFile::open(path)?)
}
