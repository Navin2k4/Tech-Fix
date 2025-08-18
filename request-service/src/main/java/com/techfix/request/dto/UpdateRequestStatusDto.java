package com.techfix.request.dto;

import com.techfix.request.entity.RequestStatus;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateRequestStatusDto {
    private RequestStatus status;
    private String assignedStaff;
}
