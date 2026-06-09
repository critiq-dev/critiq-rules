package main

func someCleanup() {}

func run() {
	defer someCleanup()
}

func multiStatement() {
	defer func() {
		someCleanup()
		otherCleanup()
	}()
}

func withControlFlow() {
	defer func() {
		if someCondition() {
			someCleanup()
		}
	}()
}
