package main

import "github.com/redis/go-redis/v9"

func checkMemory(client *redis.Client) {
	client.MemoryUsage("key1", "key2", "key3")
}
