package com.example.booking.controllers;

import com.example.booking.entities.Space;
import com.example.booking.exceptions.SpaceNotFoundException;
import com.example.booking.repositories.SpaceRepository;
import com.example.booking.services.SpaceModelAssembler;
import java.util.List;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("spaces")
public class SpaceController {
  private final SpaceRepository spaceRepository;
  private final SpaceModelAssembler spaceModelAssembler;

  SpaceController(SpaceRepository spaceRepository, SpaceModelAssembler spaceModelAssembler) {
    this.spaceRepository = spaceRepository;
    this.spaceModelAssembler = spaceModelAssembler;
  }

  @GetMapping
  public CollectionModel<EntityModel<Space>> all() {
    List<Space> spaces = this.spaceRepository.findAll();
    return spaceModelAssembler.toCollectionModel(spaces);
  }

  @PostMapping
  Space newSpace(@RequestBody Space space) {
    return this.spaceRepository.save(space);
  }

  @GetMapping("/{id}")
  public EntityModel<Space> one(@PathVariable Long id) {
    Space space =
        this.spaceRepository.findById(id).orElseThrow(() -> new SpaceNotFoundException(id));
    return spaceModelAssembler.toModel(space);
  }

  @PutMapping("/{id}")
  Space updateSpace(@PathVariable Long id, @RequestBody Space newSpace) {
    return this.spaceRepository
        .findById(id)
        .map(
            space -> {
              space.setCode(newSpace.getCode());
              space.setName(newSpace.getName());
              return this.spaceRepository.save(space);
            })
        .orElseGet(
            () -> {
              newSpace.setId(id);
              return this.spaceRepository.save(newSpace);
            });
  }

  @DeleteMapping("/{id}")
  void deleteSpace(@PathVariable Long id) {
    this.spaceRepository.deleteById(id);
  }
}
