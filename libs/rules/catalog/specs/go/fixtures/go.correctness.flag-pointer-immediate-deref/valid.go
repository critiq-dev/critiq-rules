package main

import "flag"

func main() {
	ptr := flag.String("name", "", "")
	flag.Parse()
	val := *ptr
	_ = val
}
