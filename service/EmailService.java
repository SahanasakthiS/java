package com.example.myapp.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public interface EmailService {

  
	void sendPaymentConfirmation(String toEmail, String payerName, Double amount );
	
}