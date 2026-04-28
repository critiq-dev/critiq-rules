package service

import "os"

func handleReport(r Request) {
	reportName := r.URL.Query().Get("report")
	_, _ = os.ReadFile(reportName)
}
