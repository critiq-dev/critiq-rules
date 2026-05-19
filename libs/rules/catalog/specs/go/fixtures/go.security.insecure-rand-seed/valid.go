package main

import (
	"crypto/rand"
	"io"
)

func newToken(buf []byte) error {
	_, err := io.ReadFull(rand.Reader, buf)
	return err
}
