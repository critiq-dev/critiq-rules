package main

import "go.etcd.io/etcd/client/v3"

func check() {
	var cli *clientv3.Client
	log := cli.GetLogger()
	_ = log
}
