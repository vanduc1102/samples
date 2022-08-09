package com.example.ratingapi.dtos;

import lombok.Data;

@Data
public class Rating {
    private long id;
    private long bookId;
    private int stars;
}
