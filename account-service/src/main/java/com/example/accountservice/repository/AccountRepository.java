package com.example.accountservice.repository;

import com.example.accountservice.dto.AccountType;
import com.example.accountservice.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, String> {
    List<Account> findByCustomerId(String customerId);
    boolean existsByCustomerIdAndAccountType(String customerId, AccountType type);
}
