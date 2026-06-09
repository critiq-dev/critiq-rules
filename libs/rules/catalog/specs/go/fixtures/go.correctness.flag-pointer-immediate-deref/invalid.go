package main

import "flag"

func main() {
	val := *flag.String("name", "", "")
	_ = val
}
