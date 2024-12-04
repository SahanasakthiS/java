package com.example.myapp.service;

import com.example.myapp.model.User;
import com.example.myapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String usernameOrEmail, String password) {
        return userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .map(user -> user.getPassword().equals(password))
                .orElse(false);
    }
}