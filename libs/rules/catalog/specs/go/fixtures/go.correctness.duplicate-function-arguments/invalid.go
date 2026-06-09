package main

import "fmt"

func main() {
	name := "hello"
	_ = fmt.Sprintf("%s-%s", name, name)
}
