package com.example.accountservice.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AccountDTO {
    private String id;

    @NotBlank(message = "Balance is mandatory")
    @Min(value = 0, message = "Balance must be at least 0.")
    private Double balance;

    @NotBlank(message = "Account type is mandatory")
    private AccountType accountType;

    @NotBlank(message = "Customer ID is mandatory")
    private String customerId;

}
