package main

import clientv3 "go.etcd.io/etcd/client/v3"

func compareValues() {
	clientv3.Compare(clientv3.Value("key"), "INVALID_OP", "value")
}
