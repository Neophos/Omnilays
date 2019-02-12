import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OmnilaysRoutingModule } from './omnilays.routing.module';
import { OmnilaysMainComponent } from './app.component';
import { DashboardComponent } from './dashboard/omnilays.dashboard';
import { MatchScreenComponent } from './matchscreen/omnilays.matchscreen';
import { MatchService } from './matchservice/omnilays.match.service';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MatchWidget } from './dashboard/omnilays.match.widget.component';
import { CurrentMatchWidget } from './dashboard/omnilays.current.widget';

@NgModule({
  declarations: [
    OmnilaysMainComponent,
    DashboardComponent,
    MatchScreenComponent,
    MatchWidget,
    CurrentMatchWidget
  ],
  imports: [
    BrowserModule,
    OmnilaysRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [MatchService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api.smash.gg/gql/alpha'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [OmnilaysMainComponent]
})
export class AppModule { }
