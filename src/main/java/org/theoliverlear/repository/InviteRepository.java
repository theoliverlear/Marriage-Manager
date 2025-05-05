package org.theoliverlear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.theoliverlear.entity.Invite;

public interface InviteRepository extends JpaRepository<Invite, Long> {
    Invite findByFullName(String fullName);
}
