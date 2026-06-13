use std::fs;

fn clean_temp() -> std::io::Result<()> {
    fs::remove_dir_all("/tmp/build")?;
    std::fs::remove_dir_all("/tmp/cache")?;
    Ok(())
}
