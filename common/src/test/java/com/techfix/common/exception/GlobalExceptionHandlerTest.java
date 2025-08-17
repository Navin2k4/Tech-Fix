package com.techfix.common.exception;

import com.techfix.common.dto.ErrorResponse;
import org.junit.jupiter.api.Test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.ServletWebRequest;

import static org.junit.jupiter.api.Assertions.*;

class GlobalExceptionHandlerTest {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandlerTest.class);

    private final GlobalExceptionHandler globalExceptionHandler = new GlobalExceptionHandler();

    @Test
    void handleApiException_NotFound() {
        ApiException ex = ApiException.notFound("User not found");
        MockHttpServletRequest request = new MockHttpServletRequest("GET", "/api/v1/users/01");
        ServletWebRequest webRequest = new ServletWebRequest(request);
        ResponseEntity<ErrorResponse> response = globalExceptionHandler.handleApiException(ex, webRequest);

        log.info("Handled ApiException: {}", response.getBody());

        assertEquals(404, response.getBody().status());
        assertEquals("Not Found", response.getBody().error());
        assertEquals("User not found", response.getBody().message());
        assertEquals("/api/v1/users/01", response.getBody().path());
    }

    @Test
    void handleGenericException_InternalServerError() {
        Exception ex = new RuntimeException("Unexpected failure");
        MockHttpServletRequest request = new MockHttpServletRequest("POST", "/api/v1/test");
        ServletWebRequest webRequest = new ServletWebRequest(request);

        ResponseEntity<ErrorResponse> response = globalExceptionHandler.handleGenericException(ex, webRequest);

        log.error("Handled Generic Exception: {}", response.getBody());

        assertEquals(500, response.getBody().status());
        assertEquals("Internal Server Error", response.getBody().error());
        assertEquals("Unexpected failure", response.getBody().message());
        assertEquals("/api/v1/test", response.getBody().path());
    }
}