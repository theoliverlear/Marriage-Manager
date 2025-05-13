// invite.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {Invite} from "../../../models/rsvp/types";
import {TagType} from "../../../models/html/TagType";
import {DropdownOption} from "../dropdown/models/DropdownOption";
import {
    cancelIconImageAsset,
    confirmIconImageAsset,
    ImageAsset,
    pendingIconImageAsset
} from "../../../assets/imageAssets";
import {
    HttpSetInviteService
} from "../../../services/http/http-set-invite.service";
import {OperationSuccessResponse} from "../../../models/http/types";

@Component({
    selector: 'invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.css']
})
export class InviteComponent {
    @Input() invite: Invite;
    constructor(private setInviteService: HttpSetInviteService) {
        
    }

    updateInvite(status: string): void {
        this.invite.status = status;
        this.sendUpdatedInviteToServer();
    }

    sendUpdatedInviteToServer(): void {
        this.setInviteService.setInvite(this.invite).subscribe((response: OperationSuccessResponse): void => {
            console.log(response);
        });
    }

    getImageAsset(): ImageAsset {
        switch (this.invite.status) {
            case 'Accepted':
                return confirmIconImageAsset;
            case 'Pending':
                return pendingIconImageAsset;
            case 'Declined':
                return cancelIconImageAsset;
            default:
                return confirmIconImageAsset;
        }
    }

    protected readonly TagType = TagType;
    protected readonly DropdownOption = DropdownOption;
}
