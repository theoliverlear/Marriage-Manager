// invite-list.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {InviteList} from "../../../models/rsvp/types";
import {
    HttpGetAllInvitesService
} from "../../../services/http/http-get-all-invites.service";

@Component({
    selector: 'invite-list',
    templateUrl: './invite-list.component.html',
    styleUrls: ['./invite-list.component.css']
})
export class InviteListComponent implements OnInit {
    @Input() invites: InviteList = {
        invites: []
    }
    constructor(private getAllInvitesService: HttpGetAllInvitesService) {
        
    }
    public updateInvites(): void {
        this.getAllInvitesService.getAllInvites().subscribe(invites => {
            console.log(invites);
            if (invites) {
                this.invites = invites;
            }
        });
    }
    ngOnInit(): void {
        this.updateInvites();
    }
}
