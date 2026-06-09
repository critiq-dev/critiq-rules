package main

import (
	"bytes"
	"fmt"
)

func writeGreeting(buf *bytes.Buffer, name string) {
	fmt.Fprint(buf, "Hello, ", name, "!")
}
