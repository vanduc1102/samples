package controllers

import (
	"dev-to/samzhangjy/go-lang-crud/db"
	"dev-to/samzhangjy/go-lang-crud/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreatePostInput struct {
	Title   string `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
}

func CreatePost(c *gin.Context) {

	var input CreatePostInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	post := models.Post{Title: input.Title, Content: input.Content}
	db.DB.Create(&post)

	c.JSON(http.StatusOK, gin.H{"data": post})
}

type UpdatePostInput struct {
	Title   string `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
}

func UpdatePost(c *gin.Context) {
	var post models.Post
	if err := db.DB.Where("id=?", c.Param("id")).First(&post).Error; err != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": err})
		return
	}

	var input UpdatePostInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}

	updatedPost := models.Post{
		Title:   input.Title,
		Content: input.Content,
	}

	db.DB.Model(&post).Updates(&updatedPost)
	c.JSON(http.StatusOK, gin.H{"data": post})
}

func DeletePost(c *gin.Context) {
	var post models.Post

	if err := db.DB.Where("id=?", c.Param("id")).First(&post).Error; err != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "not found record."})
		return
	}

	db.DB.Delete(&post)
	c.JSON(http.StatusOK, gin.H{"data": "success"})
}

func FindPosts(c *gin.Context) {
	var posts []models.Post
	db.DB.Find(&posts)
	c.JSON(http.StatusOK, gin.H{"data": posts})
}

func FindPost(c *gin.Context) {
	var post models.Post

	if err := db.DB.Where("id = ?", c.Param("id")).First(&post).Error; err != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "not found record"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": post})
}
