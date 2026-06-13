# Correct: where.first or find_by_sql
User.where(email: email).first
User.find_by_sql("SELECT * FROM users")
