from pathlib import Path

from flask import send_file
import os

REPORT_ROOT = Path("reports")


@app.get("/reports/<path:report_name>")
def get_report(report_name):
    target = REPORT_ROOT / report_name
    return send_file(os.path.join("/tmp", request.args["name"]))
