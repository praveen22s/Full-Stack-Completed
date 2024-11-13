// src/main/java/com/example/loginregister/service/PaymentService.java
package com.example.loginregister.service;

import com.example.loginregister.model.Payment;
import com.example.loginregister.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
