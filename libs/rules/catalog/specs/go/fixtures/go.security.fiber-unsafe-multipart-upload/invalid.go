package main

import "github.com/gofiber/fiber/v2"

func register(app *fiber.App) {
	app.Post("/upload", func(c *fiber.Ctx) error {
		_, _ = c.FormFile("file")
		return c.SaveFile("user.bin", "./uploads/user-supplied-name.bin")
	})
}
