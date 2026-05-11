package main

import (
	"github.com/gofiber/fiber/v2"
)

type UpdateUser struct {
	Role string `json:"role"`
}

func register(app *fiber.App) {
	app.Post("/users/:id", func(c *fiber.Ctx) error {
		var req UpdateUser
		return c.BodyParser(&req)
	})
}
