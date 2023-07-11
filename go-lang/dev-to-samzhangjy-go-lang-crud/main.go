package main

import (
	"dev-to/samzhangjy/go-lang-crud/controllers"
	"dev-to/samzhangjy/go-lang-crud/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	db.ConnectDatabase()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World",
		})
	})

	router.POST("/posts", controllers.CreatePost)
	router.GET("/posts", controllers.FindPosts)
	router.GET("/posts/:id", controllers.FindPost)
	router.DELETE("/posts/:id", controllers.DeletePost)
	router.PATCH("/posts/:id", controllers.UpdatePost)

	router.Run("localhost:3001")
}
