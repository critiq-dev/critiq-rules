package main

import (
	"database/sql"
	"fmt"
)

func query(ctx interface{}, db *sql.DB, input string) {
	db.ExecContext(ctx, fmt.Sprintf("SELECT * FROM users WHERE id = %s", input))
}
