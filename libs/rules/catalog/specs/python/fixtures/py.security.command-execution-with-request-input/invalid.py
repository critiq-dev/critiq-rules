import subprocess
from flask import request

@app.get("/reports/<path:report_name>")
def get_report(report_name: str):
    subprocess.run(report_name, shell=True)
