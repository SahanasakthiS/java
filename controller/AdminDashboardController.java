package com.example.myapp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.service.AdminDashboardService;

@RestController
@RequestMapping("/auth/admin-dashboard")
public class AdminDashboardController {

	private final AdminDashboardService adminDashboardService;

    @Autowired
    public AdminDashboardController(AdminDashboardService adminDashboardService) {
        this.adminDashboardService = adminDashboardService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Integer>> getDashboardStats() {
        return ResponseEntity.ok(adminDashboardService.getStats());
    }
}