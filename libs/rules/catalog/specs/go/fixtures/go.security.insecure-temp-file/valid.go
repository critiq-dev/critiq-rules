package main

import "os"

func writeReport() error {
	_, err := os.CreateTemp("", "report-*.tmp")
	return err
}
