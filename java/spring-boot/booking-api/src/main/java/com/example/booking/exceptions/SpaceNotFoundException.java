package com.example.booking.exceptions;

public class SpaceNotFoundException extends RuntimeException {
  public SpaceNotFoundException(Long id) {
    super("Could not find employee " + id);
  }
}
