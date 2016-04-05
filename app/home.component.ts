/**
 * home.component
 */

import {Component} from "angular2/core";
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {GithubService} from './github.service';

@Component({
    templateUrl: './app/home.component.html',
    providers: [GithubService]
})

export class HomeComponent {

    private _searchTermStream = new Subject<string>();

    constructor(private _githubService:GithubService) {
    }

    search(term:string) {
        this._searchTermStream.next(term);
    }

    users:Observable<Object[]> = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .filter(term=> term !== '' || term !== undefined)
        .switchMap((term:string)=> this._githubService.search(term));
}
