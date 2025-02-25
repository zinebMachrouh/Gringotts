package com.example.accountservice.service.impl;

import com.example.accountservice.dto.AccountDTO;
import com.example.accountservice.entity.Account;
import com.example.accountservice.repository.AccountRepository;
import com.example.accountservice.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final RestTemplate restTemplate;

    public AccountDTO createAccount(AccountDTO accountDTO) {
        String customerServiceUrl = "http://CUSTOMER-SERVICE/customers/" + accountDTO.getCustomerId();
        var response = restTemplate.getForEntity(customerServiceUrl, Object.class);

        if (!response.getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException("Customer not found with ID: " + accountDTO.getCustomerId());
        }
        boolean accountExists = accountRepository.existsByCustomerIdAndAccountType(accountDTO.getCustomerId(), accountDTO.getAccountType());
        if (accountExists) {
            throw new RuntimeException("Client already has a " + accountDTO.getAccountType() + " account.");
        }

        return mapToDTO(accountRepository.save(mapToEntity(accountDTO)));
    }

    public AccountDTO getAccountById(String id) {
        return accountRepository.findById(id)
                .map(this::mapToDTO)
                .orElseThrow(() -> new RuntimeException("Account not found with ID: " + id));
    }

    public List<AccountDTO> getAccountsByCustomerId(String customerId) {
        return accountRepository.findByCustomerId(customerId)
                .stream()
                .map(this::mapToDTO)
                .toList();
    }


    private Account mapToEntity(AccountDTO accountDTO) {
        return Account.builder()
                .id(accountDTO.getId())
                .customerId(accountDTO.getCustomerId())
                .accountType(accountDTO.getAccountType())
                .balance(accountDTO.getBalance())
                .build();
    }

    private AccountDTO mapToDTO(Account account) {
        return AccountDTO.builder()
                .id(account.getId())
                .customerId(account.getCustomerId())
                .accountType(account.getAccountType())
                .balance(account.getBalance())
                .build();
    }
}
