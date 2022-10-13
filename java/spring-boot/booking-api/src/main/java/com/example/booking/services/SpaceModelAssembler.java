package com.example.booking.services;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import com.example.booking.controllers.SpaceController;
import com.example.booking.entities.Space;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class SpaceModelAssembler
    implements RepresentationModelAssembler<Space, EntityModel<Space>> {

  @Override
  public EntityModel toModel(Space space) {
    return EntityModel.of(
        space,
        linkTo(methodOn(SpaceController.class).one(space.getId())).withSelfRel(),
        linkTo(methodOn(SpaceController.class).all()).withRel("spaces"));
  }
}
