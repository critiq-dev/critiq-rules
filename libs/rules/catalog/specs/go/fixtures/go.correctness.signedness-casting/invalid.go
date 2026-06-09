package main

import "strconv"

func convert() {
	val, _ := strconv.Atoi("42")
	result := int8(val)
	_ = result
}
