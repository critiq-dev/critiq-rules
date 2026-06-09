package main

import "gorm.io/gorm"

func setup() {
	db, _ := gorm.Open(nil, &gorm.Config{SkipDefaultTransaction: false})
	_ = db
}
