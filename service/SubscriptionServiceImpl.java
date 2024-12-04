package com.example.myapp.service;

import com.example.myapp.dto.SubscriptionRequest;
import com.example.myapp.entity.Subscription;
import com.example.myapp.repository.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    public SubscriptionServiceImpl(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    @Override
    public Subscription createSubscription(SubscriptionRequest request) {
        Subscription subscription = new Subscription();
        subscription.setUserId(request.getUserId());
        subscription.setPlanName(request.getPlanName());
        subscription.setStartDate(request.getStartDate());
        subscription.setEndDate(request.getEndDate());
        subscription.setIsActive(true);
        return subscriptionRepository.save(subscription);
    }

    @Override
    public List<Subscription> getSubscriptionsByUser(Long userId) {
        return subscriptionRepository.findByUserId(userId);
    }

    @Override
    public void cancelSubscription(Long subscriptionId) {
        Subscription subscription = subscriptionRepository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("Subscription not found"));
        subscription.setIsActive(false);
        subscriptionRepository.save(subscription);
    }

    @Override
    public void sendRenewalNotifications() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();
        for (Subscription subscription : subscriptions) {
            if (subscription.getEndDate().isBefore(LocalDateTime.now().plusDays(7)) && subscription.getIsActive()) {
                subscription.setRenewalNotification(true);
                subscriptionRepository.save(subscription);
                // Add logic to send notification
            }
        }
    }
}
