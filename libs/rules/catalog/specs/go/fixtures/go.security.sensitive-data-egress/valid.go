package main

import (
	"bytes"
	"net/http"
)

func h(w http.ResponseWriter, _ *http.Request) {
	_, _ = http.Post("https://hooks.example.com/notify", "application/json", bytes.NewReader([]byte(`{}`)))
}
