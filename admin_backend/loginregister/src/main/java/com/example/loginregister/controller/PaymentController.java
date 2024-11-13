// src/main/java/com/example/loginregister/controller/PaymentController.java
package com.example.loginregister.controller;

import com.example.loginregister.model.Payment;
import com.example.loginregister.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/payments")
@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:3000"})
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/submit")
    public ResponseEntity<Payment> submitPayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok(savedPayment);
    }
}
