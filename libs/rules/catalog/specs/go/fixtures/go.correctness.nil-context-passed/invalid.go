package main

import "net/http"

func newRequest(url string) (*http.Request, error) {
	return http.NewRequestWithContext(nil, "GET", url, nil)
}
