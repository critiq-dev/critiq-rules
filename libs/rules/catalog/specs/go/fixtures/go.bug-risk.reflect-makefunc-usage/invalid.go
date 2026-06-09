package main

import "reflect"

func makeFn() {
	fn := reflect.MakeFunc(reflect.TypeOf((func(int) int)(nil)), nil)
	_ = fn
}
