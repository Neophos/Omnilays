import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmnilaysMainComponent } from './app.component';
import { DashboardComponent } from './dashboard/omnilays.dashboard';
import { MatchScreenComponent } from './matchscreen/omnilays.matchscreen';

const routes: Routes = [
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

export const OmnilaysRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);