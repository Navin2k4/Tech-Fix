package com.techfix.request.service;

import com.techfix.common.exception.ApiException;
import com.techfix.request.dto.CreateRequestDto;
import com.techfix.request.dto.RequestDto;
import com.techfix.request.dto.UpdateRequestStatusDto;
import com.techfix.request.entity.RequestStatus;
import com.techfix.request.entity.ServiceRequest;
import com.techfix.request.repository.ServiceRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RequestService {
    private final ServiceRequestRepository serviceRequestRepository;

    @PreAuthorize("hasRole('USER')")
    public RequestDto createRequest(CreateRequestDto dto) {
        String customerUsername = SecurityContextHolder.getContext().getAuthentication().getName();

        ServiceRequest request = ServiceRequest.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .customerUsername(customerUsername)
                .status(RequestStatus.PENDING)
                .build();

        ServiceRequest saved = serviceRequestRepository.save(request);
        return toDto(saved);
    }

    /**
     * Anyone (authenticated or even public, depending on config) can see requests.
     */
    public List<RequestDto> getAllRequests(){
        return serviceRequestRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public RequestDto getRequestById(Long id) {
        return serviceRequestRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() -> ApiException.notFound("ServiceRequest with id " + id + " not found"));
    }

    /**
     * Only STAFF or ADMIN can update request status.
     */
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public RequestDto updateStatus(Long id, UpdateRequestStatusDto dto) {
        ServiceRequest request = serviceRequestRepository.findById(id)
                .orElseThrow(() -> ApiException.notFound("ServiceRequest with id " + id + " not found"));

        if (dto.getStatus() != null) {
            request.setStatus(dto.getStatus());
        }
        if (dto.getAssignedStaff() != null) {
            request.setAssignedStaff(dto.getAssignedStaff());
        }

        ServiceRequest updated = serviceRequestRepository.save(request);
        return toDto(updated);
    }

    /**
     * Delete request:
     * - Customers can delete only their own request, only if it's still PENDING.
     * - Staff/Admin can delete any request.
     */
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public void deleteRequest(Long id) {
        String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();

        ServiceRequest request = serviceRequestRepository.findById(id)
                .orElseThrow(() -> ApiException.notFound("ServiceRequest with id " + id + " not found"));

        boolean isCustomer = SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_CUSTOMER"));

        if (isCustomer) {
            if (!request.getCustomerUsername().equals(currentUser)) {
                throw ApiException.forbidden("You cannot delete someone else’s request.");
            }
            if (request.getStatus() != RequestStatus.PENDING) {
                throw ApiException.badRequest("You can only delete requests in PENDING state.");
            }
        }

        serviceRequestRepository.delete(request);
    }

    private RequestDto toDto(ServiceRequest request) {
        return RequestDto.builder()
                .id(request.getId())
                .title(request.getTitle())
                .description(request.getDescription())
                .status(request.getStatus())
                .customerUsername(request.getCustomerUsername())
                .assignedStaff(request.getAssignedStaff())
                .createdAt(request.getCreatedAt())
                .updatedAt(request.getUpdatedAt())
                .build();
    }
}
