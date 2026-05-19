package main

import (
	"crypto/sha256"
	"fmt"
)

func hash(payload []byte) string {
	sum := sha256.Sum256(payload)
	return fmt.Sprintf("%x", sum)
}
