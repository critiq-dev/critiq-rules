package main

import "fmt"

func functionCallRHS() {
	var name string = fmt.Sprintf("hello-%d", 1)
}

func expressionRHS() {
	var sum int = 10 + 20
}

func nilRHS() {
	var ptr *string = nil
}

func shortDecl() {
	label := "inferred"
	_ = label
}
