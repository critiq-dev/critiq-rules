package main

import "github.com/gin-gonic/gin"

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func register(r *gin.Engine) {
	r.POST("/login", func(c *gin.Context) {
		var req LoginRequest
		_ = c.ShouldBindJSON(&req)
	})
}
