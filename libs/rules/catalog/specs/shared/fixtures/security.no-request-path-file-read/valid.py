from pathlib import Path

REPORT_ROOT = Path("reports")


def get_report():
    target = REPORT_ROOT / "daily-summary.txt"
    return target.read_text(encoding="utf-8")
