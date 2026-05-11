package main

import (
	"html/template"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	_ = r.URL.Query().Get("preview")
	safe := "fixed-preview"
	html := template.HTML(safe)
	_ = html
}
