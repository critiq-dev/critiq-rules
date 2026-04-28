package service

import "fmt"

func loadUser(db DB, email string) {
	query := fmt.Sprintf("SELECT * FROM users WHERE email = '%s'", email)
	db.Query(query)
}
