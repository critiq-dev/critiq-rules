package service

func loadUser(db DB, email string) {
	db.Query("SELECT * FROM users WHERE email = ?", email)
}
