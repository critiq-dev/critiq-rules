package main

import (
	"io"
	"os"
)

func writeMessage(w io.Writer) {
	w.Write([]byte("hello world"))
}
