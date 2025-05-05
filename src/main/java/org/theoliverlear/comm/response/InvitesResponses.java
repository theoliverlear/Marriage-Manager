package org.theoliverlear.comm.response;

import lombok.Data;
import org.theoliverlear.entity.Invite;

import java.util.List;

@Data
public class InvitesResponses {
    private InviteResponse[] invites;
    public InvitesResponses(List<Invite> invites) {
        this.invites = invites.stream()
                .map(invite -> {
                    return new InviteResponse(invite.getFullName(),
                                              invite.getStatus().status);
                })
                .toArray(InviteResponse[]::new);
    }
}
