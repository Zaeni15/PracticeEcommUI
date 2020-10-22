import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LeftLoginComponent } from './components/left-login/left-login.component'
import { RightLoginComponent } from './components/right-login/right-login.component'

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';
import { LoginSearchService } from './services/login-search.service';

/**
 * The Login Module.
 */

 @NgModule({
     imports: [
         FlexLayoutModule,
         MatCardModule
     ],
     exports: [
         LeftLoginComponent,
         RightLoginComponent,
         LoginComponent
     ],
     declarations: [LeftLoginComponent, RightLoginComponent, LoginComponent],
     providers: [LoginSearchService]
 })
 export class LoginModule { }