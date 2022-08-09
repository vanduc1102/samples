package com.sample.spring.session;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;

@ComponentScan
@SpringBootApplication
public class SessionWebApplication {
    public  static  void main(String [] args){
        SpringApplication.run(SessionWebApplication.class, args);
    }
}
