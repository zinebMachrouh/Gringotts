package com.example.accountservice.service;

import com.example.accountservice.dto.AccountDTO;

import java.util.List;

public interface AccountService {
    AccountDTO createAccount(AccountDTO accountDTO);
    AccountDTO getAccountById(String id);
    List<AccountDTO> getAccountsByCustomerId(String customerId);
}
