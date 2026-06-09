package main

import "net/http"

func main() {
	req, _ := http.NewRequest("GET", "https://example.com", nil)
	_ = req
}
