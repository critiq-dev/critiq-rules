package main

import (
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/labstack/echo/v4"
)

func register(e *echo.Echo) {
	e.POST("/upload", func(c echo.Context) error {
		c.Request().Body = http.MaxBytesReader(c.Response(), c.Request().Body, 5<<20)
		file, _ := c.FormFile("file")
		src, _ := file.Open()
		defer src.Close()
		name := filepath.Base(file.Filename)
		dst, _ := os.Create("./uploads/" + name)
		defer dst.Close()
		_, _ = io.Copy(dst, src)
		return nil
	})
}
