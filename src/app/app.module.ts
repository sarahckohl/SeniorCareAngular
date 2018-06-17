import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import {RegisterNurseComponent} from './views/user/register-nurse/register-nurse.component';


import { routing } from './app.routing';
import { LoginService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterNurseComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
