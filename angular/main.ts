import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {
    MarriageManagerAppModule
} from "./modules/marriage-manager-app.module";

platformBrowserDynamic().bootstrapModule(MarriageManagerAppModule)
    .catch(error => console.error(error));