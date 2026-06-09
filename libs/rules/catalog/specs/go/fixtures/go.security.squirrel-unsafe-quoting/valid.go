package main

import (
	sq "github.com/Masterminds/squirrel"
)

func safeQuery(userInput string) {
	q, _, _ := sq.Select("id").From("users").Where(sq.Eq{"id": userInput})
	_ = q
}
