package main

import "net/http"

func TestFetch() {
	_, _ = http.Get("http://example.com/reports")
}
