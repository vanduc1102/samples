package com.example.bookapi.dtos;

import lombok.Data;

@Data
public class Book {
    private long id;
    private String title;
    private String author;
}
