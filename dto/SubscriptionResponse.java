package com.example.myapp.dto;
import lombok.Data;

@Data
public class SubscriptionResponse {
    private Long id;
    private Long userId;
    private String planName;
    private Boolean isActive;
    private Boolean renewalNotification;
}
