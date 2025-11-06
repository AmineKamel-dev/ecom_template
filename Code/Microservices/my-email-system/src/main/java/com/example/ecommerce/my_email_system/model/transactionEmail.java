package com.example.ecommerce.my_email_system.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;

//TODO extract extra attributes from request body
@AllArgsConstructor
public class transactionEmail extends basicEmail {
    @Getter
    @NotBlank
    @JsonProperty("orderID")
    private final String orderID;

    @Getter
    @JsonProperty("userID")
    private final String userID;

    public transactionEmail(String reciever, String order, String user) {
        super(reciever);
        this.orderID = order;
        this.userID = user;
    }

    // TODO: add mail templates using thymeleaf
}
