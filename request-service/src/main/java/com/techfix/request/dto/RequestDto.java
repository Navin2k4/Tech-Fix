package com.techfix.request.dto;

import com.techfix.request.entity.RequestStatus;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RequestDto {
    private Long id;
    private String title;
    private String description;
    private RequestStatus status;
    private String customerUsername;
    private String assignedStaff;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}