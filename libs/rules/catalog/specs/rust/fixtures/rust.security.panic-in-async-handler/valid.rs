async fn handler() -> Result<(), Error> {
    let value = fetch().await?;
    let _ = value;
    Ok(())
}
