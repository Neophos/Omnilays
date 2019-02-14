import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MATCHES } from './mock-games';
var MatchService = /** @class */ (function () {
    function MatchService() {
    }
    MatchService.prototype.getMatches = function () {
        return MATCHES;
    };
    MatchService.prototype.getMatchByID = function (id) {
        for (var i = 0; i <= MATCHES.length - 1; i++) {
            if (MATCHES[i].id === this.currentMatchID) {
                this.currentMatch = MATCHES[i];
                return this.currentMatch;
            }
        }
    };
    MatchService.prototype.getCurrentMatch = function () {
        return this.currentMatch;
    };
    MatchService.prototype.getClickedMatch = function () {
        return this.clickedMatch;
    };
    MatchService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatchService);
    return MatchService;
}());
export { MatchService };
//# sourceMappingURL=omnilays.match.service.js.map