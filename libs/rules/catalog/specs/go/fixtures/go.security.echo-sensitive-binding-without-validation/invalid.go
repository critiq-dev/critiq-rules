package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type UpdateUser struct {
	Role string `json:"role"`
}

func register(e *echo.Echo) {
	e.POST("/users/:id", func(c echo.Context) error {
		var req UpdateUser
		return c.Bind(&req)
	})
}

func main() {
	_ = http.StatusOK
}
