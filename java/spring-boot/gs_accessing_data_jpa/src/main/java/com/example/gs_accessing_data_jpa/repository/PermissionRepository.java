package com.example.gs_accessing_data_jpa.repository;

import com.example.gs_accessing_data_jpa.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
}
