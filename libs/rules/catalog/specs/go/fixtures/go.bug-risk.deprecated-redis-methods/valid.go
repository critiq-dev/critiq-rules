package main

import "context"

func check() {
	var client *redis.Client
	client.XAdd(context.Background(), &redis.XAddArgs{Stream: "key"})
}
