package service

import "log"

func handleCheckout(email string, authToken string) {
	log.Printf("checkout email=%s token=%s", email, authToken)
}
