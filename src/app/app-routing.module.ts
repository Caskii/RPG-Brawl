import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBracketComponent } from './admin-bracket/admin-bracket.component';
import { BracketPageComponent } from './bracket-page/bracket-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'bracket',component:BracketPageComponent},
  { path:'servers',component:ServersComponent},
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
