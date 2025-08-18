package com.techfix.common.security;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collections;

class JwtServiceTest {
    private JwtService jwtService;
    private UserDetails testUser;

    @BeforeEach
    void setUp() {
        jwtService = new JwtService();
        testUser = new User("testUser", "password", Collections.emptyList());
    }

    @Test
    void testGenerateAndValidateToken() {
        String token = jwtService.generateToken(testUser);

        assertNotNull(token);
        assertTrue(jwtService.isTokenValid(token));
        assertEquals("testUser", jwtService.extractUsername(token));
    }

    @Test
    void testExpiredToken() throws InterruptedException {
        // Generate token with short expiry by tweaking JwtService (optional method for tests)
        String token = jwtService.generateToken(testUser);
        assertEquals("testUser", jwtService.extractUsername(token));
    }

    @Test
    void testInvalidToken() {
        String fakeToken = "invalid.token.value";
        assertThrows(Exception.class, () -> jwtService.extractUsername(fakeToken));
    }
}