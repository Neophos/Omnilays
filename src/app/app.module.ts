import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OmnilaysRoutingModule } from './omnilays.routing.module';
import { OmnilaysMainComponent } from './app.component';
import { DashboardComponent } from './dashboard/omnilays.dashboard';
import { MatchScreenComponent } from './matchscreen/omnilays.matchscreen';
import { MatchService } from './omnilays.match.service';

@NgModule({
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
export class AppModule { }
