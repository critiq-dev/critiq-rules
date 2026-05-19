package main

import "os"

func processAll(paths []string) {
	for _, path := range paths {
		func(p string) {
			file, err := os.Open(p)
			if err != nil {
				return
			}
			defer file.Close()
			_ = file
		}(path)
	}
}
