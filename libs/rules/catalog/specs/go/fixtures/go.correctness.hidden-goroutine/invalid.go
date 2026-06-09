package main

import "fmt"

func doWork() {
	go func() {
		fmt.Println("working")
	}()
}
