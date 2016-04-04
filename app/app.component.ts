/**
 * app.component
 */

import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    directives: [NavbarComponent],
    template: `
    <my-navbar></my-navbar>
    `
})
export class AppComponent { }
