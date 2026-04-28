package main

import (
  "crypto/tls"
  "net/http"
)

func main() {
  transport := &http.Transport{
    TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
  }

  _ = transport
}
