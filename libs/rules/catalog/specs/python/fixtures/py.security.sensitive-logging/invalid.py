import logging
from flask import request

logger = logging.getLogger(__name__)
@app.get("/reports/<path:report_name>")
def get_report(report_name: str):
    logger.info("email=%s token=%s", report_name, request.headers.get("Authorization"))
