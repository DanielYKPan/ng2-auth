/**
 * app.component
 */

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {HomeComponent} from './home.component';
import {NavbarComponent} from './navbar.component';
import {LoginComponent} from './login.component';
import {SigninComponent} from './signin.component';

@Component({
    selector: 'my-app',
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
    template: `
    <my-navbar></my-navbar>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
    {path:'/login', name: 'Login', component: LoginComponent},
    {path:'/signin',        name: 'Signin',       component: SigninComponent},
    {path: '/', name: 'Home', component: HomeComponent}
])
export class AppComponent { }
