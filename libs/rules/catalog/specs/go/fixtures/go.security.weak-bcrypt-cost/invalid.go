package security

import (
	"golang.org/x/crypto/bcrypt"
)

func hash(password []byte) ([]byte, error) {
	return bcrypt.GenerateFromPassword(password, 4)
}
