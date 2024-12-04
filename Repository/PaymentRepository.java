package com.example.myapp.repository;

import com.example.myapp.entity.Payment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	@Query("SELECT COUNT(u) FROM Payment u")
    int countPayments();
}