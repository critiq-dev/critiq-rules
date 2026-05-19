package main

import (
	"github.com/golang-jwt/jwt/v5"
)

func parseToken(tokenStr string, keyFunc jwt.Keyfunc) (*jwt.Token, error) {
	return jwt.Parse(tokenStr, keyFunc)
}
