package com.techfix.request.controller;

import com.techfix.request.dto.CreateRequestDto;
import com.techfix.request.dto.RequestDto;
import com.techfix.request.dto.UpdateRequestStatusDto;
import com.techfix.request.service.RequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/service/requests")
@RequiredArgsConstructor
public class RequestController {
    private final RequestService requestService;

    @PostMapping
    public ResponseEntity<RequestDto> createRequest(@RequestBody CreateRequestDto dto){
        return ResponseEntity.ok(requestService.createRequest(dto));
    }

    @GetMapping
    public ResponseEntity<List<RequestDto>> getAllRequests() {
        return ResponseEntity.ok(requestService.getAllRequests());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RequestDto> getRequestById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(requestService.getRequestById(id));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<RequestDto> updateStatus(
            @PathVariable("id") Long id,
            @RequestBody UpdateRequestStatusDto dto) {
        return ResponseEntity.ok(requestService.updateStatus(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable("id") Long id) {
        requestService.deleteRequest(id);
        return ResponseEntity.noContent().build();
    }


}
