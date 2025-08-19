package com.techfix.auth.service;

import com.techfix.auth.dto.AuthenticationRequest;
import com.techfix.auth.dto.AuthenticationResponse;
import com.techfix.auth.dto.RegisterRequest;
import com.techfix.auth.entity.User;
import com.techfix.auth.entity.UserRole;
import com.techfix.auth.repository.UserRepository;
import com.techfix.common.exception.ApiException;
import com.techfix.common.security.JwtService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Data
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public AuthenticationResponse register(RegisterRequest request) {
        validateRegisterRequest(request);

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw ApiException.conflict("Email already registered");
        }

        var user = User.builder()
                .username(request.getUsername() != null ? request.getUsername() : request.getEmail())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(UserRole.USER)
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        if (request.getEmail() == null || request.getPassword() == null) {
            throw ApiException.badRequest("Email and password must not be null");
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (Exception ex) {
            throw ApiException.unauthorized("Invalid email or password");
        }

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> ApiException.notFound("User not found"));

        if (!user.isEnabled()) {
            throw ApiException.forbidden("User account is disabled");
        }

        Map<String, Object> claims = new HashMap<>();
        claims.put("id", user.getId());
        claims.put("email", user.getEmail());
        claims.put("roles", user.getAuthorities()
                .stream()
                .map(auth -> auth.getAuthority())
                .collect(Collectors.toList()));
        claims.put("enabled", user.isEnabled());

        var jwtToken = jwtService.generateToken(claims, user);
        return new AuthenticationResponse(jwtToken);
    }

    private void validateRegisterRequest(RegisterRequest request) {
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw ApiException.badRequest("Email must not be blank");
        }
        if (request.getPassword() == null || request.getPassword().length() < 6) {
            throw ApiException.badRequest("Password must be at least 6 characters long");
        }
    }
}
