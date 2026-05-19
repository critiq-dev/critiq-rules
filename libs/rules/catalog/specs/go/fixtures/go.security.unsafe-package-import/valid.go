package main

import (
	"encoding/binary"
	"fmt"
)

func size() {
	buf := make([]byte, 8)
	binary.LittleEndian.PutUint64(buf, 42)
	fmt.Println(buf)
}
