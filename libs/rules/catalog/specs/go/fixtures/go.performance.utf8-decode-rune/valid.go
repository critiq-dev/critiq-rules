package main

import "unicode/utf8"

func firstRune(s string) rune {
	r, _ := utf8.DecodeRuneInString(s)
	return r
}
