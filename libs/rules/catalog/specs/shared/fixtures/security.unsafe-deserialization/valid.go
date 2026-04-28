package service

import "encoding/json"

func handlePayload() {
	var decoded map[string]string
	_ = json.Unmarshal([]byte("{}"), &decoded)
}
