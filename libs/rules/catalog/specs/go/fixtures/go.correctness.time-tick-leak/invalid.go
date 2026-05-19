package main

import (
	"fmt"
	"time"
)

func heartbeat() {
	for now := range time.Tick(time.Second) {
		fmt.Println(now)
	}
}
