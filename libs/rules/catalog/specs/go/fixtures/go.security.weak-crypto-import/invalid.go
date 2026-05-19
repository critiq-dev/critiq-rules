package main

import (
	"crypto/md5"
	"fmt"
)

func hash(payload []byte) string {
	sum := md5.Sum(payload)
	return fmt.Sprintf("%x", sum)
}
