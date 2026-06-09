package main

import "os"

func run() {
	defer println("cleanup")
	println("still running")
}
