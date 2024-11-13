
package com.example.hall_booking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()// Disable CSRF for testing purposes
            .authorizeHttpRequests(authz -> authz
                .anyRequest().permitAll() // Allow all requests temporarily
            );

        return http.build();
    }
}
