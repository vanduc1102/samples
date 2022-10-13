package com.example.booking.entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "booking")
public class Booking {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
}
