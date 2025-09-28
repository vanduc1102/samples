package com.example.gs_accessing_data_jpa;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.gs_accessing_data_jpa.entity.Customer;
import com.example.gs_accessing_data_jpa.entity.Permission;
import com.example.gs_accessing_data_jpa.entity.Role;
import com.example.gs_accessing_data_jpa.entity.RolePermission;
import com.example.gs_accessing_data_jpa.entity.User;
import com.example.gs_accessing_data_jpa.repository.CustomerRepository;
import com.example.gs_accessing_data_jpa.repository.PermissionRepository;
import com.example.gs_accessing_data_jpa.repository.RolePermissionRepository;
import com.example.gs_accessing_data_jpa.repository.RoleRepository;
import com.example.gs_accessing_data_jpa.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@EnableJpaRepositories
@Slf4j
public class GsAccessingDataJpaApplication {

    public static void main(String[] args) {
        SpringApplication.run(GsAccessingDataJpaApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository, UserRepository userRepository,
            RoleRepository roleRepository, PermissionRepository permissionRepository,
            RolePermissionRepository rolePermissionRepository) {
        return args -> {
            log.info("Hello World");

            Permission readPermission = permissionRepository.save(new Permission(null, "READ", null));
            Permission writePermission = permissionRepository.save(new Permission(null, "WRITE", null));
            Permission deletePermission = permissionRepository.save(new Permission(null, "DELETE", null));

            Role adminRole = new Role(null, "ADMIN_ROLE", null);

            Role userRole = new Role(null, "USER_ROLE", null);

            Role savedAdminRole = roleRepository.save(adminRole);
            Role savedUserRole = roleRepository.save(userRole);

            RolePermission adminRolePermission1 = new RolePermission(null, savedAdminRole, readPermission, null, null, null, null);
            RolePermission adminRolePermission2 = new RolePermission(null, savedAdminRole, writePermission, null, null, null, null);
            RolePermission adminRolePermission3 = new RolePermission(null, savedAdminRole, deletePermission, null, null, null, null);

            RolePermission userRolePermission1 = new RolePermission(null, savedUserRole, readPermission, null, null, null, null);

            rolePermissionRepository.save(adminRolePermission1);
            rolePermissionRepository.save(adminRolePermission2);
            rolePermissionRepository.save(adminRolePermission3);

            rolePermissionRepository.save(userRolePermission1);

            User admin = userRepository
                    .save(new User(null, "admin@example.com", "Admin", Set.of(savedAdminRole, savedUserRole)));
            User user = userRepository.save(new User(null, "user@example.com", "User", Set.of(savedUserRole)));

            customerRepository.save(new Customer(null, "Duc", "Nguyen", admin, admin));
            customerRepository.save(new Customer(null, "Alice", "Smith", admin, admin));
            customerRepository.save(new Customer(null, "Bob", "Johnson", admin, admin));
            customerRepository.save(new Customer(null, "Charlie", "Williams", admin, admin));
            customerRepository.save(new Customer(null, "David", "Brown", admin, admin));
            customerRepository.save(new Customer(null, "Eve", "Jones", admin, admin));
            customerRepository.save(new Customer(null, "Frank", "Garcia", admin, admin));
            customerRepository.save(new Customer(null, "Grace", "Martinez", admin, admin));
            customerRepository.save(new Customer(null, "Hannah", "Davis", admin, admin));
            customerRepository.save(new Customer(null, "Ivan", "Rodriguez", admin, admin));
            customerRepository.save(new Customer(null, "Julia", "Miller", user, admin));
            customerRepository.save(new Customer(null, "Kevin", "Wilson", user, admin));

            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            customerRepository.findAll().forEach(customer -> log.info(customer.toString()));
        };
    }

}
