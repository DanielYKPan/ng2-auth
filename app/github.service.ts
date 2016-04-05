/**
 * github.service
 */

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GitHubService {
    constructor(private _http:Http) {
    }

    search(term:string) {
        let githubUrl:string = `https://api.github.com/search/users?q=` + term;
        return this._http.get(githubUrl).map(request => request.json().items);
    }

    getUserDetail(userName:string) {
        let githubUrl:string = `http://api.github.com/users/` + userName;
        return this._http.get(githubUrl).map(request => request.json());
    }

    getUserFollowers(userName:string) {
        let githubUrl:string = `http://api.github.com/users/` + userName + `/followers`;
        return this._http.get(githubUrl).map(request => request.json());
    }
}
