package main

import (
	"fmt"
	"unsafe"
)

func size() {
	fmt.Println(unsafe.Sizeof(int64(0)))
}
