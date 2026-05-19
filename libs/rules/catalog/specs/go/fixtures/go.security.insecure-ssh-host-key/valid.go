package main

import "golang.org/x/crypto/ssh"

func clientConfig(pinned ssh.PublicKey) *ssh.ClientConfig {
	return &ssh.ClientConfig{
		User:            "deploy",
		HostKeyCallback: ssh.FixedHostKey(pinned),
	}
}
