package main

import (
  "crypto/sha256"
  "fmt"
)

func checksum(payload []byte) string {
  digest := sha256.Sum256(payload)
  return fmt.Sprintf("%x", digest)
}
