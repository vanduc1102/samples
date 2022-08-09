package com.example.ratingapi.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.ratingapi.dtos.Rating;

@Service
public class RatingService {

    public List<Rating> findAllRatings() {
        return Collections.<Rating>emptyList();
    }

    public List<Rating> findRatingsByBookId(Long bookId) {
        return null;
    }

    public Rating createRating(Rating rating) {
        return null;
    }

    public void deleteRating(Long ratingId) {
    }

    public Rating updateRating(Rating rating, Long ratingId) {
        return null;
    }

    public Rating updateRating(Map<String, String> rating, Long ratingId) {
        return null;
    }

}
