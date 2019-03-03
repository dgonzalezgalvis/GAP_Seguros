import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { SeguroComponent } from './components/seguro/seguro.component';

import {AuthServiceService} from './services/auth/auth-service.service';
import {PolizasService} from './services/polizas/polizas.service';

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SegurosComponent,
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularDateTimePickerModule
  ],
  providers: [
    AuthServiceService,
    PolizasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
