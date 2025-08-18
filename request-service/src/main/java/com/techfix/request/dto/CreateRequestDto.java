package com.techfix.request.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateRequestDto {
    private String title;
    private String description;
    private String customerUsername;
}
