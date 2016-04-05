/**
 * github.component
 */

import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {GitHubService} from './github.service';
import {GithubHomeComponent} from './github-home.component';
import {GithubDetailComponent} from './github-detail.component';

@Component({
    templateUrl: './app/github.component.html',
    providers: [GitHubService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/',    name: 'GitHubHome',   component: GithubHomeComponent, useAsDefault: true},
    {path:'/:userLogin/detail', name: 'GitHubDetail', component: GithubDetailComponent}
])

export class GitHubComponent {

    private _searchTermStream = new Subject<string>();

    constructor(private _githubService:GitHubService,
                private _router:Router) {
    }

    search(term:string) {
        this._searchTermStream.next(term);
    }

    users:Observable<Object[]> = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .filter(term=> term !== '' || term !== undefined)
        .switchMap((term:string)=> this._githubService.search(term));

    onSelect(userLogin:String) {
        this._router.navigate(['GitHubDetail', {userLogin: userLogin}]);
    }
}
