package io.github.vanduc1102.flowabledemo.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Person {
  @Id @GeneratedValue private Long id;

  private String username;

  private String firstName;

  private String lastName;

  private Date birthDate;

  public Person(String username, String firstName, String lastName, Date birthDate) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}
