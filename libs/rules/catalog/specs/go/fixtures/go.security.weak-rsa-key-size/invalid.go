package main

import (
	"crypto/rand"
	"crypto/rsa"
)

func generate() (*rsa.PrivateKey, error) {
	return rsa.GenerateKey(rand.Reader, 1024)
}
