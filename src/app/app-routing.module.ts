import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
