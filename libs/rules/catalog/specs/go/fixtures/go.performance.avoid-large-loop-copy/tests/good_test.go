package p

func loop() {
	xs := make([][1024]byte, 10)
	for i := range xs {
		x := &xs[i]
		_ = x
	}
}
