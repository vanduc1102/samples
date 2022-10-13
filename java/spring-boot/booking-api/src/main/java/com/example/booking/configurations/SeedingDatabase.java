package com.example.booking.configurations;

import com.example.booking.entities.Space;
import com.example.booking.repositories.SpaceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class SeedingDatabase {
  @Bean
  CommandLineRunner seedingDb(SpaceRepository spaceRepository) {
    return args -> {
      log.info("Start seeding");
      spaceRepository.save(new Space(1, "Desk1", "D1"));
      spaceRepository.save(new Space(2, "Desk2", "D2"));
      log.info("End seeding");
    };
  }
}
