from pathlib import Path

def get_report(report_name: str):
    target = Path("reports") / "index.html"
    return target.read_text(encoding="utf-8")
