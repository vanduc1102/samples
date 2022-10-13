package io.github.vanduc1102.flowabledemo.respositories;

import io.github.vanduc1102.flowabledemo.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

  Person findByUsername(String username);
}
