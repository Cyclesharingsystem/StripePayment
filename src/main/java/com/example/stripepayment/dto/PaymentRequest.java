package com.example.stripepayment.dto;

import lombok.Getter;

@Getter
public class PaymentRequest {
    private String id;

    private double estimatedAmount;
}
