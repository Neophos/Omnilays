import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { MatchService } from "../omnilays.match.service";
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(matchService) {
        this.matchService = matchService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.player1 = this.matchService.getMatchByID(1).player1.name;
        this.title = "Runboard";
        this.player2 = this.matchService.getMatchByID(1).player2.name;
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'dashboard',
            templateUrl: './omnilays.dashboard.html',
            providers: [MatchService]
        }),
        tslib_1.__metadata("design:paramtypes", [MatchService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=omnilays.dashboard.js.map