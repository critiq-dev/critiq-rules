package main

import "go.etcd.io/etcd/client/v3"

func check() {
	var cli *clientv3.Client
	resp, err := cli.Get(nil, "key")
	_ = resp
	_ = err
}
