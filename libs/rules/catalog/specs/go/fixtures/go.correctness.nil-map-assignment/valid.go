package main

func bumpCounters() {
	counts := make(map[string]int)
	counts["requests"] = 1
	_ = counts
}
