package p

import "bytes"

func find(haystack []byte, needle string) int {
	return bytes.Index(haystack, []byte(needle))
}
