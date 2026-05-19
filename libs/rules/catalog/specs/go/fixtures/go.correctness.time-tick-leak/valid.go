package main

import (
	"fmt"
	"time"
)

func heartbeat(done <-chan struct{}) {
	ticker := time.NewTicker(time.Second)
	defer ticker.Stop()
	for {
		select {
		case now := <-ticker.C:
			fmt.Println(now)
		case <-done:
			return
		}
	}
}
