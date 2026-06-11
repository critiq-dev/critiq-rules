fn good() -> std::io::Result<()> {
    std::fs::File::open("existing.txt")?;
    Ok(())
}
