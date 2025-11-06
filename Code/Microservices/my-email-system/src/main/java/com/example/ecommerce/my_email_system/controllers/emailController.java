package com.example.ecommerce.my_email_system.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.my_email_system.model.basicEmail;
import com.example.ecommerce.my_email_system.model.transactionEmail;

@RestController
@RequestMapping("/email")
public class emailController {

    @PostMapping(path = "/basic", consumes = "application/json")
    void handleBasicEmail(@RequestBody basicEmail email) {
        // TODO : complete controller
    }

    @PostMapping(path = "/transaction", consumes = "application/json")
    void handleTransactionEmail(@RequestBody transactionEmail email) {

        // TODO: complete controller
    }
}
