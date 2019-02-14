(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"dashboard\">Dashboard</a>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: OmnilaysMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmnilaysMainComponent", function() { return OmnilaysMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OmnilaysMainComponent = /** @class */ (function () {
    function OmnilaysMainComponent() {
        this.title = 'Omnilays';
    }
    OmnilaysMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], OmnilaysMainComponent);
    return OmnilaysMainComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _omnilays_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omnilays.routing.module */ "./src/app/omnilays.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_omnilays_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/omnilays.dashboard */ "./src/app/dashboard/omnilays.dashboard.ts");
/* harmony import */ var _matchscreen_omnilays_matchscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchscreen/omnilays.matchscreen */ "./src/app/matchscreen/omnilays.matchscreen.ts");
/* harmony import */ var _matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matchservice/omnilays.match.service */ "./src/app/matchservice/omnilays.match.service.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");
/* harmony import */ var _dashboard_omnilays_match_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/omnilays.match.widget.component */ "./src/app/dashboard/omnilays.match.widget.component.ts");
/* harmony import */ var _dashboard_omnilays_current_widget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/omnilays.current.widget */ "./src/app/dashboard/omnilays.current.widget.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["OmnilaysMainComponent"],
                _dashboard_omnilays_dashboard__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _matchscreen_omnilays_matchscreen__WEBPACK_IMPORTED_MODULE_6__["MatchScreenComponent"],
                _dashboard_omnilays_match_widget_component__WEBPACK_IMPORTED_MODULE_13__["MatchWidget"],
                _dashboard_omnilays_current_widget__WEBPACK_IMPORTED_MODULE_14__["CurrentMatchWidget"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _omnilays_routing_module__WEBPACK_IMPORTED_MODULE_3__["OmnilaysRoutingModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_8__["GraphQLModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_10__["ApolloModule"],
                apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__["HttpLinkModule"]
            ],
            providers: [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_7__["MatchService"],
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_10__["APOLLO_OPTIONS"],
                    useFactory: function (httpLink) {
                        return {
                            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_12__["InMemoryCache"](),
                            link: httpLink.create({
                                uri: 'https://api.smash.gg/gql/alpha'
                            })
                        };
                    },
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_11__["HttpLink"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["OmnilaysMainComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/omnilays.current.widget.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/omnilays.current.widget.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"current\">\n    <h2>{{matchService.getCurrentMatch().player1.name}} {{matchService.getCurrentMatch().player1.land}}</h2> \n    <p>in {{matchService.getCurrentMatch().tournamentRound}}</p>\n    <h2>{{matchService.getCurrentMatch().player2.name}} {{matchService.getCurrentMatch().player2.land}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/omnilays.current.widget.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/omnilays.current.widget.ts ***!
  \******************************************************/
/*! exports provided: CurrentMatchWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentMatchWidget", function() { return CurrentMatchWidget; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matchservice/omnilays.match.service */ "./src/app/matchservice/omnilays.match.service.ts");



var CurrentMatchWidget = /** @class */ (function () {
    function CurrentMatchWidget(matchService) {
        this.matchService = matchService;
    }
    CurrentMatchWidget.prototype.ngOnInit = function () {
        this.currentMatch = this.matchService.getCurrentMatch();
    };
    CurrentMatchWidget.prototype.getCurrentMatch = function () {
        return this.currentMatch;
    };
    CurrentMatchWidget.prototype.setClickedMatch = function (clicked) {
        this.currentMatch = this.matchService.getMatchByID(clicked);
    };
    CurrentMatchWidget = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'currentmatch',
            template: __webpack_require__(/*! ./omnilays.current.widget.html */ "./src/app/dashboard/omnilays.current.widget.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]])
    ], CurrentMatchWidget);
    return CurrentMatchWidget;
}());



/***/ }),

/***/ "./src/app/dashboard/omnilays.dashboard.html":
/*!***************************************************!*\
  !*** ./src/app/dashboard/omnilays.dashboard.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav\">\n    <ul>\n        <li><a routerLink=\"../dashboard\">Dashboard</a></li>\n        <li><a routerLink=\"../matchscreen\">Matchscreen</a></li>\n    </ul>\n</div>\n\n<currentmatch></currentmatch>\n\n<div>\n    <li class=\"matchSelector\" *ngFor=\"let match of matches\">\n        <button (click)=\"changeMatch(match.id)\" mat-button>Send match {{match.id}} to stream</button>\n    </li>\n</div>\n\n<button (click)=\"Update()\">Update</button>"

/***/ }),

/***/ "./src/app/dashboard/omnilays.dashboard.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/omnilays.dashboard.ts ***!
  \*************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matchservice/omnilays.match.service */ "./src/app/matchservice/omnilays.match.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(matchService) {
        this.matchService = matchService;
        this.matches = this.matchService.getMatches();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentMatch = this.matchService.getCurrentMatch();
    };
    DashboardComponent.prototype.Update = function () {
        this.currentMatch = this.matchService.getCurrentMatch();
    };
    DashboardComponent.prototype.changeMatch = function (id) {
        console.log("changed match to " + this.matchService.getMatchByID(id).player1.name);
        this.matchService.setCurrentMatch(id);
        this.Update();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./omnilays.dashboard.html */ "./src/app/dashboard/omnilays.dashboard.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/omnilays.match.widget.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/omnilays.match.widget.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <li class=\"matchSelector\" *ngFor=\"let match of matches\">\n        <button (click)=\"changeMatch(match.id)\" mat-button>Send match {{match.id}} to stream</button>\n    </li>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/omnilays.match.widget.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/omnilays.match.widget.component.ts ***!
  \**************************************************************/
/*! exports provided: MatchWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchWidget", function() { return MatchWidget; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matchservice/omnilays.match.service */ "./src/app/matchservice/omnilays.match.service.ts");



var MatchWidget = /** @class */ (function () {
    function MatchWidget(matchService) {
        this.matchService = matchService;
    }
    MatchWidget = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'matchwidget',
            template: __webpack_require__(/*! ./omnilays.match.widget.component.html */ "./src/app/dashboard/omnilays.match.widget.component.html"),
            providers: [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]])
    ], MatchWidget);
    return MatchWidget;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");





var uri = 'https://api.smash.gg/gql/alpha'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/matchscreen/omnilays.matchscreen.html":
/*!*******************************************************!*\
  !*** ./src/app/matchscreen/omnilays.matchscreen.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Current match</h1>\n<h2>{{currentMatch.player1.name}}</h2> vs <h2>{{currentMatch.player2.name}}</h2>"

/***/ }),

/***/ "./src/app/matchscreen/omnilays.matchscreen.ts":
/*!*****************************************************!*\
  !*** ./src/app/matchscreen/omnilays.matchscreen.ts ***!
  \*****************************************************/
/*! exports provided: MatchScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchScreenComponent", function() { return MatchScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matchservice/omnilays.match.service */ "./src/app/matchservice/omnilays.match.service.ts");



var MatchScreenComponent = /** @class */ (function () {
    function MatchScreenComponent(matchService) {
        this.matchService = matchService;
        this.title = "Matchscreen";
    }
    MatchScreenComponent.prototype.ngOnInit = function () {
        this.currentMatch = this.matchService.getCurrentMatch();
    };
    MatchScreenComponent.prototype.Update = function () {
    };
    MatchScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'matchscreen',
            template: __webpack_require__(/*! ./omnilays.matchscreen.html */ "./src/app/matchscreen/omnilays.matchscreen.html"),
            inputs: ["currentMatch"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_matchservice_omnilays_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]])
    ], MatchScreenComponent);
    return MatchScreenComponent;
}());



/***/ }),

/***/ "./src/app/matchservice/omnilays.match.service.ts":
/*!********************************************************!*\
  !*** ./src/app/matchservice/omnilays.match.service.ts ***!
  \********************************************************/
/*! exports provided: MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_games__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-games */ "./src/app/mock-games.ts");



var MatchService = /** @class */ (function () {
    function MatchService() {
        this.currentMatch = _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"][0];
        console.log("matchservice instance");
    }
    MatchService.prototype.getCurrentMatch = function () {
        return this.currentMatch;
    };
    MatchService.prototype.getMatches = function () {
        return _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"];
    };
    MatchService.prototype.getMatchByID = function (id) {
        for (var i = 0; i <= _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"].length - 1; i++) {
            if (_mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"][i].id === id) {
                this.currentMatch = _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"][i];
                return _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"][i];
            }
        }
    };
    MatchService.prototype.setCurrentMatch = function (id) {
        this.currentMatch = _mock_games__WEBPACK_IMPORTED_MODULE_2__["MATCHES"][id - 1];
    };
    MatchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatchService);
    return MatchService;
}());



/***/ }),

/***/ "./src/app/mock-games.ts":
/*!*******************************!*\
  !*** ./src/app/mock-games.ts ***!
  \*******************************/
/*! exports provided: MATCHES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCHES", function() { return MATCHES; });
/* harmony import */ var _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omnilays.match.model */ "./src/app/omnilays.match.model.ts");
/* harmony import */ var _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omnilays.player.model */ "./src/app/omnilays.player.model.ts");


var MATCHES = [
    new _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__["Match"](1, new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Neophos", "SE"), new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Hogge", "SE"), "GF"),
    new _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__["Match"](2, new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("jerry", "SE"), new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Akkare", "DK"), "Round 2 pools"),
    new _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__["Match"](3, new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Svampen", "SE"), new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Mighty", "NO"), "Losers semis"),
    new _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__["Match"](4, new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Daigo", "JP"), new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Itazan", "JP"), "Winners finals"),
    new _omnilays_match_model__WEBPACK_IMPORTED_MODULE_0__["Match"](5, new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("JWong", "US"), new _omnilays_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jaffar", "SE"), "Round 3")
];


/***/ }),

/***/ "./src/app/omnilays.match.model.ts":
/*!*****************************************!*\
  !*** ./src/app/omnilays.match.model.ts ***!
  \*****************************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
var Match = /** @class */ (function () {
    function Match(id, player1, player2, tournamentRound) {
        this.id = id;
        this.player1 = player1;
        this.player2 = player2;
        this.tournamentRound = tournamentRound;
    }
    return Match;
}());



/***/ }),

/***/ "./src/app/omnilays.player.model.ts":
/*!******************************************!*\
  !*** ./src/app/omnilays.player.model.ts ***!
  \******************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(name, land) {
        this.name = name;
        this.land = land;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/omnilays.routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/omnilays.routing.module.ts ***!
  \********************************************/
/*! exports provided: OmnilaysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmnilaysRoutingModule", function() { return OmnilaysRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_omnilays_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/omnilays.dashboard */ "./src/app/dashboard/omnilays.dashboard.ts");
/* harmony import */ var _matchscreen_omnilays_matchscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchscreen/omnilays.matchscreen */ "./src/app/matchscreen/omnilays.matchscreen.ts");




var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__["OmnilaysMainComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_omnilays_dashboard__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'matchscreen',
        component: _matchscreen_omnilays_matchscreen__WEBPACK_IMPORTED_MODULE_3__["MatchScreenComponent"]
    }
];
var OmnilaysRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/neophos/Omnilays/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map