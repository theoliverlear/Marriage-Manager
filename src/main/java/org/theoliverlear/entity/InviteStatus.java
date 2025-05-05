package org.theoliverlear.entity;

public enum InviteStatus {
    ACCEPTED("Accepted"),
    PENDING("Pending"),
    DECLINED("Declined");
    public final String status;
    InviteStatus(String status) {
        this.status = status;
    }
    public static InviteStatus from(String status) {
        for (InviteStatus inviteStatus : InviteStatus.values()) {
            if (inviteStatus.status.equalsIgnoreCase(status)) {
                return inviteStatus;
            }
        }
        throw new IllegalArgumentException("Invalid status: " + status);
    }
}
