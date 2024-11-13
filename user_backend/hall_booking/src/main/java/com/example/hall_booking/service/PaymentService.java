// src/main/java/com/example/hall_booking/service/PaymentService.java
package com.example.hall_booking.service;

import com.example.hall_booking.model.Payment;
import com.example.hall_booking.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        // Here you could add additional business logic or validation if needed
        return paymentRepository.save(payment);
    }
}
