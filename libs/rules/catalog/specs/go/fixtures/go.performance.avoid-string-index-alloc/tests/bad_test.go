package p

import "strings"

func find(haystack []byte, needle string) int {
	return strings.Index(string(haystack), needle)
}
