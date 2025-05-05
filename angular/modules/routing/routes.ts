import {Route, Routes} from "@angular/router";
import {HomeComponent} from "../../components/pages/home/home.component";


const isDevelopment = false;

export const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        meta: {
            title: 'Marriage Manager',
        }
    }
};
export const routes: Routes = [
    homeRoute,
];