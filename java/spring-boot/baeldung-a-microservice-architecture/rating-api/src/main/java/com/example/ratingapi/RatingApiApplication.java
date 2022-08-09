package com.example.ratingapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.ratingapi")
public class RatingApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(RatingApiApplication.class, args);
    }

}
