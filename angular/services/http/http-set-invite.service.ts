import {Injectable} from "@angular/core";
import { HttpClientService } from "./http-client.service";
import {OperationSuccessResponse} from "../../models/http/types";
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Invite} from "../../models/rsvp/types";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpSetInviteService extends HttpClientService<Invite, OperationSuccessResponse> {
    static readonly SET_INVITE_URL: string = `${environment.apiUrl}/invite/set`;
    constructor(httpClient: HttpClient) {
        super(HttpSetInviteService.SET_INVITE_URL, httpClient);
    }
    public setInvite(invite: Invite): Observable<OperationSuccessResponse> {
        return this.put(invite);
    }
}