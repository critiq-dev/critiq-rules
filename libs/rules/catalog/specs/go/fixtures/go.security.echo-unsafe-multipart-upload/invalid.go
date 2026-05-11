package main

import (
	"io"
	"os"

	"github.com/labstack/echo/v4"
)

func register(e *echo.Echo) {
	e.POST("/upload", func(c echo.Context) error {
		file, _ := c.FormFile("file")
		src, _ := file.Open()
		defer src.Close()
		dst, _ := os.Create("./uploads/" + file.Filename)
		defer dst.Close()
		_, _ = io.Copy(dst, src)
		return nil
	})
}
