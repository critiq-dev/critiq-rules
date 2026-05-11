package main

import "github.com/gofiber/fiber/v2"

type UpdateUser struct {
	DisplayName string `json:"displayName" validate:"required,max=100"`
}

func register(app *fiber.App) {
	app.Post("/users/:id", func(c *fiber.Ctx) error {
		var req UpdateUser
		return c.BodyParser(&req)
	})
}
