import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { LoginComponent } from './login/components/login/login.component';

/**
 * All application routes.
 */

 const routes: Routes = [
     { path: '', component: LoginComponent },
     { path: 'dashboard', component: DashboardComponent}
 ];

 /**
  * The App routing modules.
  * It configures the RouterModule with all the nets-training application routes.
  */

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  export class AppRoutingModule { }
