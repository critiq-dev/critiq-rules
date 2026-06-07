def get_report(report_name: str):
    cursor.execute("SELECT * FROM reports WHERE name = ?", (report_name,))
