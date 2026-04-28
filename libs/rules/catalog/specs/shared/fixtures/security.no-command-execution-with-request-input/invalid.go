package service

import "os/exec"

func handleCommand(r Request) {
	command := r.URL.Query().Get("cmd")
	_, _ = exec.Command("sh", "-c", command).Output()
}
