/**
 * home.component
 */
System.register(["angular2/core", 'rxjs/Subject', './github.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Subject_1, github_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_githubService) {
                    var _this = this;
                    this._githubService = _githubService;
                    this._searchTermStream = new Subject_1.Subject();
                    this.users = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .filter(function (term) { return term !== '' || term !== undefined; })
                        .switchMap(function (term) { return _this._githubService.search(term); });
                }
                HomeComponent.prototype.search = function (term) {
                    this._searchTermStream.next(term);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/home.component.html',
                        providers: [github_service_1.GithubService]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map