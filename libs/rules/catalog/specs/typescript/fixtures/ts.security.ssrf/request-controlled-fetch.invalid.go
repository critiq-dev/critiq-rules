package main

import (
	"net/http"
)

func handler(r *http.Request) {
	u := r.FormValue("url")
	_, _ = http.Get(u)
}
