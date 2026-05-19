package main

import "net/http"

func serve() error {
	return http.ListenAndServe("127.0.0.1:8080", nil)
}
