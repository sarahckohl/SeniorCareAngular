import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { RegisterNurseComponent } from './views/user/register-nurse/register-nurse.component';

import { CalendarModule } from "angular-calendar";
import { routing } from './app.routing';
import {DataTableModule} from "angular-6-datatable"
import { CalendarComponent } from './views/user/calendar/calendar.component';
import { AvailableComponent } from './views/user/available/available.component';
import { AppointmentComponent } from './views/user/appointment/appointment.component';
import { CreateComponent } from './views/user/create/create.component';
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LandingPageComponent } from './views/user/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterNurseComponent,
    CalendarComponent,
    AvailableComponent,
    AppointmentComponent,
    CreateComponent,
    LandingPageComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    routing,
    CalendarModule,
    DataTableModule,
    HttpClientModule,
    HttpModule,
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
