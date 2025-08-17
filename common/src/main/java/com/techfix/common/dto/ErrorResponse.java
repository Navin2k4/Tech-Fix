package com.techfix.common.dto;

import java.time.LocalDateTime;

/**
 * Standardized error response payload for all services.
 */
public record ErrorResponse (
        int status,
        String error,
        String message,
        String path,
        LocalDateTime timestamp
){}
