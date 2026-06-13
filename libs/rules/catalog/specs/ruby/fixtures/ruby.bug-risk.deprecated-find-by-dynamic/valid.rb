# Correct: modern find_by hash syntax
User.find_by(email: "test@test.com")
User.find_by_sql("SELECT * FROM users")
