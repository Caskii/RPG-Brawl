import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StandingComponent } from './standing/standing.component';
import { FinalBracketComponent } from './final-bracket/final-bracket.component';
import { ServersComponent } from './servers/servers.component';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerService } from './services/server.service';
import { MapService } from './services/map.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MapDetailsComponent } from './map-details/map-details.component';
import { ManiaplanetNameComponent } from './maniaplanet-name/maniaplanet-name.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AdminBracketComponent } from './admin-bracket/admin-bracket.component';
import { AuthGuard } from './guards/auth.guard';
import { PlayerService } from './services/player.service';
import { MapOverviewComponent } from './map-overview/map-overview.component';
import { MillisecToMinSecMilliPipe } from './pipes/millisec-to-min-sec-milli.pipe';
import { LeaderboardService } from './services/leaderboard.service';
import { BracketPageComponent } from './bracket-page/bracket-page.component';
import { MapInCardComponent } from './map-in-card/map-in-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StandingComponent,
    FinalBracketComponent,
    ServersComponent,
    MapsComponent,
    NotFoundComponent,
    MapDetailsComponent,
    ManiaplanetNameComponent,
    LoginComponent,
    AdminBracketComponent,
    MapOverviewComponent,
    MillisecToMinSecMilliPipe,
    BracketPageComponent,
    MapInCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerService,MapService,PlayerService,LeaderboardService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
