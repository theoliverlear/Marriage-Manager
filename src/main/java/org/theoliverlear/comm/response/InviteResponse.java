package org.theoliverlear.comm.response;

import lombok.Data;

@Data
public class InviteResponse {
    private String fullName;
    private String status;

    public InviteResponse(String fullName, String status) {
        this.fullName = fullName;
        this.status = status;
    }
}
