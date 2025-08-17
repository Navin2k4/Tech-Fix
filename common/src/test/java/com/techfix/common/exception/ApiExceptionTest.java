package com.techfix.common.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.*;

class ApiExceptionTest {

    @Test
    void testNotFoundException() {
        ApiException ex = ApiException.notFound("User not found");

        assertEquals(HttpStatus.NOT_FOUND, ex.getStatus());
        assertEquals("Not Found", ex.getError());
        assertEquals("User not found", ex.getMessage());
    }

    @Test
    void testBadRequestException() {
        ApiException ex = ApiException.badRequest("Invalid input");

        assertEquals(HttpStatus.BAD_REQUEST, ex.getStatus());
        assertEquals("Bad Request", ex.getError());
        assertEquals("Invalid input", ex.getMessage());
    }

    @Test
    void testUnauthorizedException() {
        ApiException ex = ApiException.unauthorized("Invalid token");

        assertEquals(HttpStatus.UNAUTHORIZED, ex.getStatus());
        assertEquals("Unauthorized", ex.getError());
        assertEquals("Invalid token", ex.getMessage());
    }
}