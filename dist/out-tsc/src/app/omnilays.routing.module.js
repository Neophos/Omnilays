import { RouterModule } from '@angular/router';
import { OmnilaysMainComponent } from './app.component';
import { DashboardComponent } from './dashboard/omnilays.dashboard';
import { MatchScreenComponent } from './matchscreen/omnilays.matchscreen';
var routes = [
    {
        path: '',
        component: OmnilaysMainComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'matchscreen',
        component: MatchScreenComponent
    }
];
export var OmnilaysRoutingModule = RouterModule.forRoot(routes);
//# sourceMappingURL=omnilays.routing.module.js.map