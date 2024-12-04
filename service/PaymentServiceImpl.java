package com.example.myapp.service;

import com.example.myapp.dto.PaymentRequest;
import com.example.myapp.entity.Payment;
import com.example.myapp.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public  class PaymentServiceImpl implements PaymentService {
	
	
	@Autowired
    private final PaymentRepository paymentRepository;
	private final EmailService emailService;
	
	 public PaymentServiceImpl(PaymentRepository paymentRepository, EmailService emailService) {
	        this.paymentRepository = paymentRepository;
	        this.emailService = emailService;
	    }


    @Override
    public Payment processPayment(PaymentRequest paymentRequest) {
        // Add logging
        System.out.println("Processing payment for: " + paymentRequest.getPayerName());
        
        Payment payment = new Payment();
        payment.setPayerName(paymentRequest.getPayerName());
        payment.setPayerEmail(paymentRequest.getPayerEmail());
        payment.setAmount(paymentRequest.getAmount());
        payment.setCourseName(paymentRequest.getCourseName());
        payment.setStatus("SUCCESS");
        payment.setPaymentDate(LocalDateTime.now());

        // Add logging before saving
        System.out.println("Saving payment: " + payment);
        
        Payment savedPayment = paymentRepository.save(payment);
        
        emailService.sendPaymentConfirmation(
                paymentRequest.getPayerEmail(),
                paymentRequest.getPayerName(),
                paymentRequest.getAmount()
            );


        return savedPayment;
    }
	 	
}