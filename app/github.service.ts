/**
 * github.service
 */

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {
    constructor(private _http:Http) {
    }

    search(term:string) {
        let githubUrl:string = `https://api.github.com/search/users?q=` + term;
        return this._http.get(githubUrl).map(request => request.json().items);
    }
}
