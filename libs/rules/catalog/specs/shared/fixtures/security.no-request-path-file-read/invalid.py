from pathlib import Path

REPORT_ROOT = Path("reports")


@app.get("/reports/<path:report_name>")
def get_report(report_name):
    target = REPORT_ROOT / report_name
    return target.read_text(encoding="utf-8")
