package com.example.hall_booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hall_booking.model.Token;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, String> {

    Optional<Token> findByToken(String token);

    List<Token> findAllByUser_IdAndExpiredFalseAndRevokedFalse(Long id);
}
