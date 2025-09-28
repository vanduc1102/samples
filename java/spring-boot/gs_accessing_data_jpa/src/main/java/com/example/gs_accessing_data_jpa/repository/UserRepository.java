package com.example.gs_accessing_data_jpa.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gs_accessing_data_jpa.entity.User;

public interface UserRepository extends JpaRepository<User, UUID> {

}
