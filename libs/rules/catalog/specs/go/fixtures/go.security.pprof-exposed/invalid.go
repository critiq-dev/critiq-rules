package main

import (
	"net/http"
	_ "net/http/pprof"
)

func register() {
	http.Handle("/debug/pprof/", http.DefaultServeMux)
}
