package com.example.myapp.service;

import java.util.List;
import java.util.Optional;

import com.example.myapp.dto.PaymentRequest;
import com.example.myapp.entity.Payment;


public interface PaymentService {
    Payment processPayment(PaymentRequest paymentRequest);
}