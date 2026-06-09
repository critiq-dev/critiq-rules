package main

import "os"

func run() {
	defer println("cleanup")
	os.Exit(1)
}
