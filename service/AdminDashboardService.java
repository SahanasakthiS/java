package com.example.myapp.service;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myapp.repository.*;

@Service
public class AdminDashboardService {

    private final UserRepository userRepository;
    private final PaymentRepository paymentRepository;
    private final SubscriptionRepository subscriptionRepository;

    @Autowired
    public AdminDashboardService(UserRepository userRepository, 
                                 PaymentRepository paymentRepository, 
                                 SubscriptionRepository subscriptionRepository) {
        this.userRepository = userRepository;
        this.paymentRepository = paymentRepository;
        this.subscriptionRepository = subscriptionRepository;
    }

    public Map<String, Integer> getStats() {
        Map<String, Integer> stats = new HashMap<>();
        
        // Fetch real-time data from the database
        stats.put("usersCount", userRepository.countUsers());
        stats.put("paymentsCount", paymentRepository.countPayments());
        stats.put("subscriptionsCount", subscriptionRepository.countSubscriptions());

        return stats;
    }
}
