package com.example.myapp.dto;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class SubscriptionRequest {

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Plan name is required")
    private String planName;

    @NotNull(message = "Start date is required")
    private LocalDateTime startDate;

    @NotNull(message = "End date is required")
    private LocalDateTime endDate;

    // Getters
    public Long getUserId() {
        return userId;
    }

    public String getPlanName() {
        return planName;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }
}