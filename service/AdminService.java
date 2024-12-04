package com.example.myapp.service;

import com.example.myapp.model.Admin;
import com.example.myapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(String usernameOrEmail, String password) {
        return adminRepository.findByUsernameAndPassword(usernameOrEmail, password).isPresent() ||
               adminRepository.findByEmailAndPassword(usernameOrEmail, password).isPresent();
    }
}