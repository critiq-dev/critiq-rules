def load_user(cursor, email):
    query = f"SELECT * FROM users WHERE email = '{email}'"
    cursor.execute(query)
