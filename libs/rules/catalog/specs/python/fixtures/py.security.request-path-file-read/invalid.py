from pathlib import Path
from flask import request

REPORT_ROOT = Path("reports")
@app.get("/reports/<path:report_name>")
def get_report(report_name: str):
    target = REPORT_ROOT / report_name
    return target.read_text(encoding="utf-8")
