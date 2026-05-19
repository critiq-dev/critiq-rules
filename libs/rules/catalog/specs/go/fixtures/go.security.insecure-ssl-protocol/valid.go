package main

import (
	"crypto/tls"
)

func newConfig() *tls.Config {
	return &tls.Config{
		MinVersion: tls.VersionTLS13,
	}
}
