package main

import "net/http"

func serve() error {
	return http.ListenAndServe("0.0.0.0:8080", nil)
}
