package com.techfix.request.config;

import com.techfix.common.security.JwtService;
import com.techfix.common.security.JwtValidationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtService jwtService;

    @Bean
    public JwtValidationFilter jwtValidationFilter() {
        return new JwtValidationFilter(jwtService);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/api/v1/service/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/v1/service/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/api/v1/service/**").authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtValidationFilter(), UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
