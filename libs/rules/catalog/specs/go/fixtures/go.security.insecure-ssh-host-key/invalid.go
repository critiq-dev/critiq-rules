package main

import "golang.org/x/crypto/ssh"

func clientConfig() *ssh.ClientConfig {
	return &ssh.ClientConfig{
		User:            "deploy",
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}
}
