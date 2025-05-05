import {Injectable} from "@angular/core";
import {HttpClientService} from "./http-client.service";
import {InviteList} from "../../models/rsvp/types";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpGetAllInvitesService extends HttpClientService<any, InviteList> {
    static readonly GET_ALL_INVITES_URL: string = `${environment.apiUrl}/invite/get/all`;
    constructor(httpClient: HttpClient) {
        super(HttpGetAllInvitesService.GET_ALL_INVITES_URL, httpClient);
    }
    public getAllInvites(): Observable<InviteList> {
        return this.get();
    }
}