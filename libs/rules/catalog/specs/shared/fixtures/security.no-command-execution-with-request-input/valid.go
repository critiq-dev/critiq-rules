package service

import "os/exec"

func handleCommand() {
	_, _ = exec.Command("uptime").Output()
}
