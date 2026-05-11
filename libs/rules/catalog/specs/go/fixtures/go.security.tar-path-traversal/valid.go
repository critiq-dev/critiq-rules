package main

import (
	"archive/tar"
	"os"
	"path/filepath"
)

func extract(hdr *tar.Header) {
	_, _ = os.Create(filepath.Base(hdr.Name))
}
