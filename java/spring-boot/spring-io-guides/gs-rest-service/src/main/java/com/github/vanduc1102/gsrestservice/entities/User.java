package com.github.vanduc1102.gsrestservice.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotEmpty
    @Column(unique = true, nullable = false)
    private String name;

    @Email
    @NotEmpty
    @Column(unique = true, nullable = false)
    private String email;

    @URL
    @Column(name = "photo_url", length = 1024)
    private String photoUrl;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
