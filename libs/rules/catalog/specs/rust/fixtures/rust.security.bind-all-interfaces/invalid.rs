use std::net::TcpListener;

pub fn boot() -> std::io::Result<()> {
    let listener = TcpListener::bind("0.0.0.0:8080")?;
    Ok(())
}
