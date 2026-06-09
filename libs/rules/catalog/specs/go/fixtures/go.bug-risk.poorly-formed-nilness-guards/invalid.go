package main

func badNilGuard(cmd *Cmd) int {
	if cmd == nil && cmd.Execute() == 0 {
		return 0
	}
	return 1
}
