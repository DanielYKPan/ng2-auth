/**
 * github-detail.component
 */

import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';

import {GitHubService} from './github.service';

@Component({
    templateUrl: `./app/github-detail.component.html`,
    directives: [ROUTER_DIRECTIVES]
})

export class GithubDetailComponent implements OnInit {
    userData:Object = {};
    userLogin:string;
    followers:Observable<Object[]>;

    constructor(private _routeParams:RouteParams,
                private _githubService:GitHubService) {
    }

    ngOnInit() {
        this.userLogin = this._routeParams.get('userLogin');
        this._githubService
            .getUserDetail(this.userLogin)
            .subscribe(
                data => this.userData = data,
                err=> console.log(err)
            );
    }

    getFollowers() {
        this.followers = this._githubService.getUserFollowers(this.userLogin);
    }
}
