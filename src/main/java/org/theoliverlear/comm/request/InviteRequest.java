package org.theoliverlear.comm.request;

import lombok.Data;

@Data
public class InviteRequest {
    private String fullName;
    private String status;
    public InviteRequest(String fullName, String status) {
        this.fullName = fullName;
        this.status = status;
    }
}
