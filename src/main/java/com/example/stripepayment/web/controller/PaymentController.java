package com.example.stripepayment.web.controller;

import com.example.stripepayment.dto.PaymentRequest;
import com.example.stripepayment.dto.CreatePaymentResponse;
import com.example.stripepayment.service.StripePaymentService;
import com.stripe.exception.StripeException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PaymentController {
    private final StripePaymentService paymentService;

    @PostMapping("/create-payment-intent")
    public CreatePaymentResponse createPaymentIntent(@RequestBody PaymentRequest paymentRequest) {
            return paymentService.createPaymentIntent(paymentRequest);
    }
}

