package main

import (
  "crypto/tls"
  "net/http"
)

func main() {
  transport := &http.Transport{
    TLSClientConfig: &tls.Config{MinVersion: tls.VersionTLS12},
  }

  _ = transport
}
