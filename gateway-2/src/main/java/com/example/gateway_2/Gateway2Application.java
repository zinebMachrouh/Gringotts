package com.example.gateway_2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class Gateway2Application {

	public static void main(String[] args) {
		SpringApplication.run(Gateway2Application.class, args);
	}

}
