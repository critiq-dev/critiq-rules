package main

import "github.com/gin-gonic/gin"

func setupRouter() {
	r := gin.Default()
	r.LoadHTMLFiles("templates/index.html", "templates/about.html")
	_ = r
}
