def load_user(cursor, email):
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
