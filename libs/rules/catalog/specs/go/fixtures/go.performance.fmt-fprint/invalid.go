package main

import (
	"bytes"
	"fmt"
)

func writeGreeting(buf *bytes.Buffer, name string) {
	buf.Write([]byte(fmt.Sprintf("Hello, %s!", name)))
}
