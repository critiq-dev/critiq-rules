use tempfile::Builder;

fn write_report() {
    let _ = Builder::new().prefix("report-").rand_bytes(5).tempfile();
    let _ = std::fs::File::create("/tmp/report-*.tmp");
}
