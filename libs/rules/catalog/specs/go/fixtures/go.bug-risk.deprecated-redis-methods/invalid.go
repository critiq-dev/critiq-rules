package main

import "context"

func check() {
	var client *redis.Client
	client.XTrim(context.Background(), "key", 0)
}
