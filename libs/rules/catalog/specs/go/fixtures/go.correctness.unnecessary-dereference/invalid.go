package main

type S struct {
	Name string
	Val  int
}

func fieldAccess(s *S) string {
	return (*s).Name
}

func doubleDeref(s **S) string {
	return (**s).Name
}

func indexAccess(arr *[3]int) int {
	return (*arr)[0]
}
