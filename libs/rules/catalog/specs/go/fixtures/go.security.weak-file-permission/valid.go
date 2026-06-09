package main

import "os"

func write() {
	os.WriteFile("/tmp/f", []byte("sensitive"), 0600)
}
