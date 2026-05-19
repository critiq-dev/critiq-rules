package main

import (
	"crypto/tls"
)

func newConfig() *tls.Config {
	return &tls.Config{
		ServerName: "api.example.com",
		MinVersion: tls.VersionTLS12,
	}
}
