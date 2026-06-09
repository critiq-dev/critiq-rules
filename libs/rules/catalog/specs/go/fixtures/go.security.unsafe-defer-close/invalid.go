package main

import "os"

func write() {
	f, _ := os.Create("/tmp/f")
	defer f.Close()
}
