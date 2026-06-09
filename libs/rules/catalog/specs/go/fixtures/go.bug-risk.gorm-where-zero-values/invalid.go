package main

type User struct {
	Name string
	Age  int
}

func findUsers() {
	var db DB
	db.Where(&User{Name: "Alice", Age: 0})
}

type DB struct{}

func (DB) Where(query interface{}, args ...interface{}) {}
