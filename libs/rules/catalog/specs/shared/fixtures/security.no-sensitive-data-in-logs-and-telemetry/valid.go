package service

import "log"

func redact(value string) string {
	return value
}

func handleCheckout(email string) {
	log.Printf("checkout email=%s", redact(email))
}
