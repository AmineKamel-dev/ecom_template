package com.example.ecommerce.my_email_system.model;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//TODO: use JSON ANYSETTE for storing extraattributes
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class basicEmail {
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
    @JsonProperty("email")
    @NotBlank(message = "Email adress should not be Blank")
    private String to;

    @JsonProperty("subject")
    private String subject;

    @JsonProperty("body")
    private String body;

    private LocalDateTime timestamp;

    public basicEmail(String reciever) {
        this.to = reciever;
        this.timestamp = LocalDateTime.now();
    }
    // TODO : add mail templates with thymeleaf
}
