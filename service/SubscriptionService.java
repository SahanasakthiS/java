package com.example.myapp.service;

import com.example.myapp.dto.SubscriptionRequest;
import com.example.myapp.entity.Subscription;

import java.util.List;

public interface SubscriptionService {
    Subscription createSubscription(SubscriptionRequest request);

    List<Subscription> getSubscriptionsByUser(Long userId);

    void cancelSubscription(Long subscriptionId);

    void sendRenewalNotifications();
}