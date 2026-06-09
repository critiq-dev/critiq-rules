package main

func first(xs []int) int {
	if xs != nil && xs[0] == 0 {
		return 0
	}
	return -1
}
