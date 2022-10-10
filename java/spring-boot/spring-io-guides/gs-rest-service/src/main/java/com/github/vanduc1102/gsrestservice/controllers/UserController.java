package com.github.vanduc1102.gsrestservice.controllers;

import com.github.vanduc1102.gsrestservice.dto.CreateUserDto;
import com.github.vanduc1102.gsrestservice.entities.User;
import com.github.vanduc1102.gsrestservice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserController {

  @Autowired private UserRepository userRepository;

  @PostMapping
  public User addNewUser(@RequestBody CreateUserDto payload) {
    User newUser = new User(payload.getName(), payload.getEmail());
    return userRepository.save(newUser);
  }

  @GetMapping
  public Iterable<User> getAllUsers() {
    return userRepository.findAll();
  }
}
