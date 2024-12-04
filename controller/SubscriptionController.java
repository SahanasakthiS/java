package com.example.myapp.controller;

import com.example.myapp.dto.SubscriptionRequest;
import com.example.myapp.entity.Subscription;
import com.example.myapp.service.SubscriptionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth/subscriptions")
@CrossOrigin(origins = "http://localhost:4200")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public ResponseEntity<Subscription> createSubscription(@Valid @RequestBody SubscriptionRequest request) {
        Subscription subscription = subscriptionService.createSubscription(request);
        return ResponseEntity.ok(subscription);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Subscription>> getSubscriptionsByUser(@PathVariable Long userId) {
        List<Subscription> subscriptions = subscriptionService.getSubscriptionsByUser(userId);
        return ResponseEntity.ok(subscriptions);
    }

    @DeleteMapping("/{subscriptionId}")
    public ResponseEntity<Void> cancelSubscription(@PathVariable Long subscriptionId) {
        subscriptionService.cancelSubscription(subscriptionId);
        return ResponseEntity.noContent().build();
    }
}
