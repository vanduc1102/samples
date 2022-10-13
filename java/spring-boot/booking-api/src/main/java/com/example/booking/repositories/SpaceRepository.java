package com.example.booking.repositories;

import com.example.booking.entities.Space;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpaceRepository extends CrudRepository<Space, Long> {
  @Override
  List<Space> findAll();
}
