package com.example.myapp.repository;

import com.example.myapp.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByUserId(Long userId);
    @Query("SELECT COUNT(u) FROM Subscription u")
    int countSubscriptions();
}