package main

import "database/sql"

func query(ctx interface{}, db *sql.DB, id string) {
	db.ExecContext(ctx, "SELECT * FROM users WHERE id = ?", id)
}
