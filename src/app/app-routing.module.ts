import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBracketComponent } from './admin-bracket/admin-bracket.component';
import { FinalBracketComponent } from './final-bracket/final-bracket.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MapDetailsComponent } from './map-details/map-details.component';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServersComponent } from './servers/servers.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  { path:'',component:StandingComponent},
  { path:'standing',component:StandingComponent},
  { path:'bracket',component:FinalBracketComponent},
  { path:'servers',component:ServersComponent},
  { path:'maps/:id',component:MapDetailsComponent},
  { path:'maps',component:MapsComponent},
  { path:'admin',component:LoginComponent},
  { path:'admin/bracket',component:AdminBracketComponent,canActivate: [AuthGuard]},
  { path:'**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
