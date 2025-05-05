package org.theoliverlear.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.theoliverlear.comm.request.InviteRequest;
import org.theoliverlear.comm.response.InvitesResponses;
import org.theoliverlear.entity.Invite;
import org.theoliverlear.entity.InviteStatus;
import org.theoliverlear.repository.InviteRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class InviteService {
    private InviteRepository inviteRepository;
    @Autowired
    public InviteService(InviteRepository inviteRepository) {
        this.inviteRepository = inviteRepository;
    }
    public InvitesResponses getAllInvites() {
        List<Invite> invites = this.inviteRepository.findAll();
        return new InvitesResponses(invites);
    }
    public InvitesResponses addMockInvites() {
        if (this.hasEntries()) {
            return new InvitesResponses(this.inviteRepository.findAll());
        }
        List<String> mockNames = List.of(
                "Douglas Sigwarth",
                "Renee Sigwarth",
                "Eva Sigwarth",
                "Laura Miller",
                "Todd Miller",
                "Zach Miller",
                "Kenzie Miller",
                "Tim Miller",
                "Taylor Miller",
                "Oliver Batt-Lutz",
                "Randy Franzmeier",
                "Madonna Link",
                "Barbra Newgaard",
                "Wendell Newgaard"
        );
        List<Invite> invites = new ArrayList<>();
        for (String name : mockNames) {
            Invite invite = new Invite(name);
            invites.add(invite);
        }
        this.inviteRepository.saveAll(invites);
        return new InvitesResponses(invites);
    }

    public boolean setInviteStatus(InviteRequest inviteRequest) {
        Invite invite = this.inviteRepository.findByFullName(inviteRequest.getFullName());
        if (invite == null) {
            return false;
        }
        invite.setStatus(InviteStatus.from(inviteRequest.getStatus()));
        this.inviteRepository.save(invite);
        return true;
    }

    public boolean hasEntries() {
        return this.inviteRepository.count() > 0;
    }

    public boolean addInvite(InviteRequest inviteRequest) {
        Invite invite = new Invite(inviteRequest.getFullName(),
                                   InviteStatus.from(inviteRequest.getStatus()));
        this.inviteRepository.save(invite);
        return true;
    }
}
