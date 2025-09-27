package com.example.gs_accessing_data_jpa.repository;

import com.example.gs_accessing_data_jpa.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
