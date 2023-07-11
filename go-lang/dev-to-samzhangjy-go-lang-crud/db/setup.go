package db

import (
	"dev-to/samzhangjy/go-lang-crud/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {

	dsn := "host=localhost user=postgres password=Password dbname=golang-samzhangjy port=5432 sslmode=disable timezone=Asia/Ho_Chi_Minh"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to databse!")
	}

	database.AutoMigrate(&models.Post{})

	DB = database

}
