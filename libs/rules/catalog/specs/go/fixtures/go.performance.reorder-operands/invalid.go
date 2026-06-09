package main

func validate(x int, ys []int) bool {
	if expensiveCheck(x) || something {
		return true
	}
	return false
}

func expensiveCheck(v int) bool {
	return v > 100
}

var something = true
