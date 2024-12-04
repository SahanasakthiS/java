package com.example.myapp.controller;

import com.example.myapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth/loginn")
@CrossOrigin(origins = "http://localhost:4200") // Replace with your frontend URL
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public String login(@RequestBody Map<String, String> credentials) {
        String usernameOrEmail = credentials.get("usernameOrEmail");
        String password = credentials.get("password");

        if (usernameOrEmail == null || password == null) {
            return "Invalid request, username or password is missing.";
        }

        if (adminService.authenticate(usernameOrEmail, password)) {
            return "Logged in successfully";
        } else {
            return "Invalid username or password";
        }
    }
}