package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"10.0.0.0/8"})
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://app.example.com"},
		AllowCredentials: true,
	}))
}
