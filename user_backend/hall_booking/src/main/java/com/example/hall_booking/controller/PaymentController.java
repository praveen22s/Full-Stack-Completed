// src/main/java/com/example/hall_booking/controller/PaymentController.java
package com.example.hall_booking.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hall_booking.model.Payment;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1/payments")
public class PaymentController {

    @PostMapping("/submit")
    public ResponseEntity<String> submitPayment(@RequestBody Payment payment) {
        // Handle payment processing
        return ResponseEntity.ok("Payment processed successfully.");
    }
}
