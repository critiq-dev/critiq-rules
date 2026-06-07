def get_report(report_name: str):
    query = f"SELECT * FROM reports WHERE name = '{report_name}'"
    cursor.execute(query)
