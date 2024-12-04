package com.example.myapp.controller;

import com.example.myapp.model.Feedback;
import com.example.myapp.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        feedbackRepository.save(feedback);
        return ResponseEntity.ok("Feedback submitted successfully!");
    }
}
