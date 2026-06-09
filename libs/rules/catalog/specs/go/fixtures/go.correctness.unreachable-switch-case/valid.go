package main

func classify(x int) string {
	switch x {
	case 1:
		println("one")
		fallthrough
	case 2:
		return "two"
	}
	return "unknown"
}
