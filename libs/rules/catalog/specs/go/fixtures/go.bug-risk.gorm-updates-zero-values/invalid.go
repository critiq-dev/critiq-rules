package main

type User struct {
	Name string
	Age  int
}

func updateUser() {
	var db DB
	var user User
	db.Model(&user).Updates(User{Name: ""})
}

type DB struct{}

func (DB) Model(value interface{}) *DB { return &DB{} }
func (DB) Updates(values interface{})  {}
