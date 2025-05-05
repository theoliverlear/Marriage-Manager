package org.theoliverlear.comm.response;

import lombok.Data;

@Data
public class OperationSuccessResponse {
    private boolean operationSuccess;
    public OperationSuccessResponse(boolean operationSuccess) {
        this.operationSuccess = operationSuccess;
    }
}
