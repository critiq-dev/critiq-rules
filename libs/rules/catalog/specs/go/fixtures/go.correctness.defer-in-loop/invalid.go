package main

import "os"

func processAll(paths []string) {
	for _, path := range paths {
		file, err := os.Open(path)
		if err != nil {
			continue
		}
		defer file.Close()
		_ = file
	}
}
