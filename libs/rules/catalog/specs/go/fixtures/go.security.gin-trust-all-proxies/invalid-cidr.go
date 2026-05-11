package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"0.0.0.0/0"})
}
