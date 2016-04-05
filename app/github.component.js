/**
 * github.component
 */
System.register(["angular2/core", 'angular2/router', 'rxjs/Subject', './github.service', './github-home.component', './github-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Subject_1, github_service_1, github_home_component_1, github_detail_component_1;
    var GitHubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (github_home_component_1_1) {
                github_home_component_1 = github_home_component_1_1;
            },
            function (github_detail_component_1_1) {
                github_detail_component_1 = github_detail_component_1_1;
            }],
        execute: function() {
            GitHubComponent = (function () {
                function GitHubComponent(_githubService, _router) {
                    var _this = this;
                    this._githubService = _githubService;
                    this._router = _router;
                    this._searchTermStream = new Subject_1.Subject();
                    this.users = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .filter(function (term) { return term !== '' || term !== undefined; })
                        .switchMap(function (term) { return _this._githubService.search(term); });
                }
                GitHubComponent.prototype.search = function (term) {
                    this._searchTermStream.next(term);
                };
                GitHubComponent.prototype.onSelect = function (userLogin) {
                    this._router.navigate(['GitHubDetail', { userLogin: userLogin }]);
                };
                GitHubComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/github.component.html',
                        providers: [github_service_1.GitHubService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'GitHubHome', component: github_home_component_1.GithubHomeComponent, useAsDefault: true },
                        { path: '/:userLogin/detail', name: 'GitHubDetail', component: github_detail_component_1.GithubDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [github_service_1.GitHubService, router_1.Router])
                ], GitHubComponent);
                return GitHubComponent;
            })();
            exports_1("GitHubComponent", GitHubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map