package com.example.gs_accessing_data_jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gs_accessing_data_jpa.entity.RolePermission;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {
}
