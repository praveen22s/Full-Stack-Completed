// src/main/java/com/example/loginregister/repository/PaymentRepository.java
package com.example.loginregister.repository;

import com.example.loginregister.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
