package main

import (
	"github.com/golang-jwt/jwt/v5"
)

func parseToken(tokenStr string) (*jwt.Token, error) {
	return jwt.Parse(tokenStr, nil)
}
