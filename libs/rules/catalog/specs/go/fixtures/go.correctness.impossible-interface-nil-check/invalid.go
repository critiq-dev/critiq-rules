package main

type MyError struct{}

func (e *MyError) Error() string { return "err" }

func maybeFail() *MyError { return nil }

func check() {
	var err error = maybeFail()
	if err != nil {
		println("never nil")
	}
}
