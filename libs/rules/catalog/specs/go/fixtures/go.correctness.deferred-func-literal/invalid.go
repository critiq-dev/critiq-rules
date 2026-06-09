package main

func someCleanup() {}

func run() {
	defer func() { someCleanup() }()
}

func handleClose() {
	cleanup := func() {}
	defer func() { cleanup() }()
}
