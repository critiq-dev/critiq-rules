use std::fs;

fn clean_temp() -> std::io::Result<()> {
    fs::remove_file("/tmp/build.lock")?;
    Ok(())
}
