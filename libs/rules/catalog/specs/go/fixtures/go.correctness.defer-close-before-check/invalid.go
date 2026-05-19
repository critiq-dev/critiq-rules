package main

import (
	"io"
	"os"
)

func readAll(path string) ([]byte, error) {
	file, err := os.Open(path)
	defer file.Close()
	if err != nil {
		return nil, err
	}
	return io.ReadAll(file)
}
