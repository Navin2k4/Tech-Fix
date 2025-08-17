package com.techfix.common.exception;

import com.techfix.common.dto.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

/**
 * Handles exceptions globally and ensures consistent JSON responses across services.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ErrorResponse> handleApiException(ApiException ex, WebRequest request) {
        ErrorResponse response = new ErrorResponse(
                ex.getStatus().value(),
                ex.getError(),
                ex.getMessage(),
                request.getDescription(false).replace("uri=", ""),
                LocalDateTime.now()
        );
        return ResponseEntity.status(ex.getStatus()).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex, WebRequest request) {
        ErrorResponse response = new ErrorResponse(
                500,
                "Internal Server Error",
                ex.getMessage(),
                request.getDescription(false).replace("uri=", ""),
                LocalDateTime.now()
        );
        return ResponseEntity.internalServerError().body(response);
    }

}
