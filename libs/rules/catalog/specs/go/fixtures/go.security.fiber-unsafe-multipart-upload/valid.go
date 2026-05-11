package main

import (
	"path/filepath"

	"github.com/gofiber/fiber/v2"
)

func register(app *fiber.App) {
	app.Post("/upload", func(c *fiber.Ctx) error {
		file, _ := c.FormFile("file")
		safe := filepath.Base(file.Filename)
		return c.SaveFile(file, "./uploads/"+safe)
	})
}
