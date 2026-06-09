package main

import "regexp"

func compile() {
	re := regexp.MustCompile("google\\.com")
	_ = re
}
