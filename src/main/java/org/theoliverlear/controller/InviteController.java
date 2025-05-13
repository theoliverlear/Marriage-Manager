package org.theoliverlear.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.theoliverlear.comm.request.InviteRequest;
import org.theoliverlear.comm.response.InvitesResponses;
import org.theoliverlear.comm.response.OperationSuccessResponse;
import org.theoliverlear.service.InviteService;

@RestController
@RequestMapping("/api/invite")
public class InviteController {
    private InviteService inviteService;

    @Autowired
    public InviteController(InviteService inviteService) {
        this.inviteService = inviteService;
    }

    @GetMapping("/add/mock")
    public ResponseEntity<InvitesResponses> addMockInvites() {
        InvitesResponses invitesResponses = this.inviteService.addMockInvites();
        return ResponseEntity.ok(invitesResponses);
    }

    @GetMapping("/get/all")
    public ResponseEntity<InvitesResponses> getAllInvites() {
        InvitesResponses invitesResponses = this.inviteService.getAllInvites();
        return ResponseEntity.ok(invitesResponses);
    }

    @PostMapping("/add")
    public ResponseEntity<OperationSuccessResponse> addInvite(@RequestBody InviteRequest inviteRequest) {
        boolean operationSuccess = this.inviteService.addInvite(inviteRequest);
        return ResponseEntity.ok(new OperationSuccessResponse(operationSuccess));
    }

    @PutMapping("/set")
    public ResponseEntity<OperationSuccessResponse> setInviteStatus(@RequestBody InviteRequest inviteRequest) {
        boolean operationSuccess = this.inviteService.setInviteStatus(inviteRequest);
        return ResponseEntity.ok(new OperationSuccessResponse(operationSuccess));
    }
}
