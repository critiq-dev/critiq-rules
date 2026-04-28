package main

import (
  "crypto/md5"
  "fmt"
)

func checksum(payload []byte) string {
  digest := md5.Sum(payload)
  return fmt.Sprintf("%x", digest)
}
