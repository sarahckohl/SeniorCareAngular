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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterNurseComponent,
    CalendarComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    routing,
    CalendarModule,
    DataTableModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
