package main

func classify(x int) string {
	switch x {
	case 1:
		return "one"
	case 2:
		return "two"
	case 3:
		return "three"
	}
	return "unknown"
}
