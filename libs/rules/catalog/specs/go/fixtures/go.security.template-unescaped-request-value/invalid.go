package main

import (
	"html/template"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	html := template.HTML(r.URL.Query().Get("preview"))
	_ = html
}
