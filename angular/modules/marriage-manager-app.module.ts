import {NgModule} from "@angular/core";
import {AppComponent} from "../components/app/app.component";
import {
    HttpClientModule,
    provideHttpClient,
    withFetch
} from "@angular/common/http";
import {services} from "../services/services";
import {NgOptimizedImage} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {pages} from "../components/pages/pages";
import {directives} from "../directives/directives";
import {elements} from "../components/elements/elements";
import {AppRoutingModule} from "./routing/app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        ...elements,
        ...directives,
        ...pages,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        RouterOutlet,
        NgOptimizedImage,
        HttpClientModule],
    providers: [
        ...services,
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent],
    exports: [],
    schemas: []
})
export class MarriageManagerAppModule {
    constructor() {

    }
}