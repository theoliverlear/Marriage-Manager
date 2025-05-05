// nav-bar.component.ts 
import {Component, OnInit, ViewChild} from "@angular/core";
import {
    navBarHomeElementLink,
    } from "../../../assets/elementLinkAssets";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    constructor() {

    }

    protected readonly navBarHomeElementLink = navBarHomeElementLink;
}
