package com.example.gs_accessing_data_jpa;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.gs_accessing_data_jpa.entity.Customer;
import com.example.gs_accessing_data_jpa.entity.User;
import com.example.gs_accessing_data_jpa.repository.CustomerRepository;
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
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository, UserRepository userRepository) {
        return args -> {
            log.info("Hello World");
            customerRepository.findAll().forEach(customer -> log.info(customer.toString()));
            User admin  = userRepository.save(new User(null, "admin@example.com", "Admin"));

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
            customerRepository.save(new Customer(null, "Julia", "Miller", admin, admin));
            customerRepository.save(new Customer(null, "Kevin", "Wilson", admin, admin));

            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            customerRepository.findAll().forEach(customer -> log.info(customer.toString()));
        };
    }

}
