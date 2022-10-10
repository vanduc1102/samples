package com.github.vanduc1102.gsrestservice.repositories;

import com.github.vanduc1102.gsrestservice.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {}
