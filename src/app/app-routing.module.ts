import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalBracketComponent } from './final-bracket/final-bracket.component';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServersComponent } from './servers/servers.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  { path:'',component:StandingComponent},
  { path:'standing',component:StandingComponent},
  { path:'bracket',component:FinalBracketComponent},
  { path:'servers',component:ServersComponent},
  { path:'maps',component:MapsComponent},
  { path:'**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
