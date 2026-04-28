package main

import "net/http"

func load() {
  _, _ = http.Get("http://localhost:3000/health")
}
