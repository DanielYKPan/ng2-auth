/**
 * github.service
 */
System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var GitHubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GitHubService = (function () {
                function GitHubService(_http) {
                    this._http = _http;
                }
                GitHubService.prototype.search = function (term) {
                    var githubUrl = "https://api.github.com/search/users?q=" + term;
                    return this._http.get(githubUrl).map(function (request) { return request.json().items; });
                };
                GitHubService.prototype.getUserDetail = function (userName) {
                    var githubUrl = "http://api.github.com/users/" + userName;
                    return this._http.get(githubUrl).map(function (request) { return request.json(); });
                };
                GitHubService.prototype.getUserFollowers = function (userName) {
                    var githubUrl = "http://api.github.com/users/" + userName + "/followers";
                    return this._http.get(githubUrl).map(function (request) { return request.json(); });
                };
                GitHubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GitHubService);
                return GitHubService;
            })();
            exports_1("GitHubService", GitHubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map