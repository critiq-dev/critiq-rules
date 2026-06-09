package main

import (
	"compress/gzip"
	"io"
	"os"
)

func decompress(path string) {
	f, _ := os.Open(path)
	zr, _ := gzip.NewReader(f)
	io.CopyN(os.Stdout, zr, 104857600)
}
