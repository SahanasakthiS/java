package com.example.myapp.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendPaymentConfirmation(String toEmail, String payerName, Double amount) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(toEmail);
        mailMessage.setSubject("Payment Confirmation");
        mailMessage.setText(
            String.format(
                "Dear %s,\n\nThank you for your payment of $%.2f.\n\nYour payment was successful.\n\nBest regards,\nEdu Consultancy",
                payerName, amount
            )
        );
        mailSender.send(mailMessage);
        System.out.println("Payment confirmation email sent successfully.");
    }
}