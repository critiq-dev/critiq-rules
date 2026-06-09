package main

import (
	"context"
	"github.com/redis/go-redis/v9"
)

func closeRedis(client *redis.Client, ctx context.Context) {
	client.Sync(ctx)
}
