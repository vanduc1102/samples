package com.tutorialspoint.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TomcatDeploymentApplication  extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(TomcatDeploymentApplication.class);
    }

    public static void main(String[] args) {
		SpringApplication.run(TomcatDeploymentApplication.class, args);
	}

    @RequestMapping(value="/")
    public String helloWorld(){
        return "Hello World from Tomcat";
    }
}
