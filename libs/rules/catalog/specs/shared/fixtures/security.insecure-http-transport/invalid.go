package main

import "net/http"

func load() {
  _, _ = http.Get("http://api.example.com/reports")
}
