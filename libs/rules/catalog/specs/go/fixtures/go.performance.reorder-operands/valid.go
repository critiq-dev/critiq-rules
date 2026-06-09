package main

func validate(x int, ys []int) bool {
	if len(ys) > 0 || expensiveCheck(x) {
		return true
	}
	return false
}

func expensiveCheck(v int) bool {
	return v > 100
}
