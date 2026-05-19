package main

import (
	"net/http"
)

func register(mux *http.ServeMux) {
	mux.HandleFunc("/healthz", func(http.ResponseWriter, *http.Request) {})
}
