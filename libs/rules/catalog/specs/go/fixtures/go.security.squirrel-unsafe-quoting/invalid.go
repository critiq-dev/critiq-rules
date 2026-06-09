package main

import (
	"fmt"
	sq "github.com/Masterminds/squirrel"
)

func unsafeQuery(userInput string) {
	q, _, _ := sq.Select("id").From("users").Where(sq.Expr(fmt.Sprintf("id = %s", userInput)))
	_ = q
}
