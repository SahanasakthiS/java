package com.example.myapp.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data

public class PaymentRequest {
    private String payerName;
    private String payerEmail;
    private Double amount;
    private String courseName;

    // Getters
    @NotNull(message= "payer name is required")
    public String getPayerName() {
        return payerName;
    }
    
    @Email(message = "Invalid email format")
    @NotNull(message= "payer Email is required")
    public String getPayerEmail() {
        return payerEmail;
    }
    
    @NotNull(message= "Amount is required")

    public Double getAmount() {
        return amount;
    }
    
    public String getCourseName() {
    	return courseName;
    }
    

    // Setters (optional, if needed elsewhere)
    public void setPayerName(String payerName) {
        this.payerName = payerName;
    }

    public void setPayerEmail(String payerEmail) {
        this.payerEmail = payerEmail;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
    
    public void setCourseName(String courseName) {
    	this.courseName = courseName;
    }
}