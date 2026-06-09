package main

import "github.com/gin-gonic/gin"

func setupRouter() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*.htm[l")
	_ = r
}
