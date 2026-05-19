use std::net::TcpListener;

pub fn boot() -> std::io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8080")?;
    Ok(())
}
