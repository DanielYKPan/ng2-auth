/**
 * navbar.component
 */

import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-navbar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/navbar.component.html'
})

export class NavbarComponent {

}