package com.sample.spring.session.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionController {

    @GetMapping("/")
    public String helloAdmin(){
        return "hello Admin";
    }
}
