package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(http.ResponseWriter, *http.Request) {})
	http.ListenAndServe(":8080", nil)
}
