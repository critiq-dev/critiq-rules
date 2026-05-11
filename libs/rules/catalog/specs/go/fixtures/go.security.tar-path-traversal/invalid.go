package main

import (
	"archive/tar"
	"os"
)

func extract(hdr *tar.Header) {
	_, _ = os.Create("./out/" + hdr.Name)
}
