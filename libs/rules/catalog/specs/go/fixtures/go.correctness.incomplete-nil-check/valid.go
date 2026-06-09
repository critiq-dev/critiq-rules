package main

func first(xs []int) int {
	if len(xs) > 0 && xs[0] == 0 {
		return 0
	}
	return -1
}
