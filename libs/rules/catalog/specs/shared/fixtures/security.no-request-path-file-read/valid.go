package service

import "os"

func handleReport() {
	_, _ = os.ReadFile("reports/daily-summary.txt")
}
