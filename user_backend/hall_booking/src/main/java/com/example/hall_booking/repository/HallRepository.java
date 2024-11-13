// HallRepository.java
package com.example.hall_booking.repository;


import com.example.hall_booking.model.Hall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HallRepository extends JpaRepository<Hall, Long> {
}
