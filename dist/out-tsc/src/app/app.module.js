import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OmnilaysRoutingModule } from './omnilays.routing.module';
import { OmnilaysMainComponent } from './app.component';
import { DashboardComponent } from './dashboard/omnilays.dashboard';
import { MatchScreenComponent } from './matchscreen/omnilays.matchscreen';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                OmnilaysMainComponent,
                DashboardComponent,
                MatchScreenComponent
            ],
            imports: [
                BrowserModule,
                OmnilaysRoutingModule
            ],
            providers: [],
            bootstrap: [OmnilaysMainComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map