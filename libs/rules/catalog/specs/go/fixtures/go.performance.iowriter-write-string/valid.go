package main

import (
	"io"
	"os"
)

func writeMessage(w io.Writer) {
	if sw, ok := w.(io.StringWriter); ok {
		sw.WriteString("hello world")
	}
}
