package com.example.gs_accessing_data_jpa.repository;

import com.example.gs_accessing_data_jpa.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
