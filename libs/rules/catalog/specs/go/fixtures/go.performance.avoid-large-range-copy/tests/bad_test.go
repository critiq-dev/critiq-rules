package p

var xs [2048]byte

func loop() {
	for _, x := range xs {
		_ = x
	}
}
