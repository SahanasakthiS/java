package com.example.myapp.controller;

import com.example.myapp.dto.PaymentRequest;
import com.example.myapp.entity.Payment;
import com.example.myapp.service.PaymentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/payments")
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentController {

    @Autowired
    private final PaymentService paymentService;
    public PaymentController (PaymentService paymentService){
    	this.paymentService= paymentService;
    	
    }

    @PostMapping
    public Object createPayment(@RequestBody PaymentRequest paymentRequest, String email,  Double amount) {
    	
    	  Payment payment = paymentService.processPayment(paymentRequest);
    	  
    	  return ResponseEntity.ok(payment);
    }
    
}
