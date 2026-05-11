package main

import (
	"io"
	"net/http"
)

func h(w http.ResponseWriter, r *http.Request) {
	_, _ = http.Post("https://hooks.example.com/notify", "application/octet-stream", r.Body)
	io.WriteString(w, "ok")
}
