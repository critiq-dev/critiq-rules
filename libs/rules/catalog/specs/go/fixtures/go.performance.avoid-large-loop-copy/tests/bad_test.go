package p

func loop() {
	xs := make([][1024]byte, 10)
	for _, x := range xs {
		_ = x
	}
}
