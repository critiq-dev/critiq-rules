package main

import "reflect"

func getType() {
	t := reflect.TypeOf(42)
	_ = t
}
