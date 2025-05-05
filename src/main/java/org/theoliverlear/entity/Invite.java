package org.theoliverlear.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "invites")
@Entity
public class Invite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private InviteStatus status;

    public Invite() {
        this.fullName = "";
        this.status = InviteStatus.PENDING;
    }

    public Invite(String fullName) {
        this.fullName = fullName;
        this.status = InviteStatus.PENDING;
    }
    public Invite(String fullName, String status) {
        this.fullName = fullName;
        this.status = InviteStatus.from(status);
    }
    public Invite(String fullName, InviteStatus status) {
        this.fullName = fullName;
        this.status = status;
    }
}
