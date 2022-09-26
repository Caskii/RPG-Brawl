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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StandingComponent,
    FinalBracketComponent,
    ServersComponent,
    MapsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
