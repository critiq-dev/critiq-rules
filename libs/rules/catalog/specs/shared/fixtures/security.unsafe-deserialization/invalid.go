package service

import "encoding/json"

func handlePayload(r Request) {
	payload := r.FormValue("payload")
	var decoded map[string]string
	_ = json.Unmarshal([]byte(payload), &decoded)
}
