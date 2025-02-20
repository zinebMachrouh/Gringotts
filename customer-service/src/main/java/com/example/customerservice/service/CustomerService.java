package com.example.customerservice.service;

import com.example.customerservice.dto.CustomerDTO;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    CustomerDTO addCustomer(CustomerDTO customerDTO);
    List<CustomerDTO> getAllCustomers();
    Optional<CustomerDTO> getCustomer(String id);
}
