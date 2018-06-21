import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { RegisterNurseComponent } from './views/user/register-nurse/register-nurse.component';


import { routing } from './app.routing';
import { AppointSchedulerComponent } from './views/user/appoint-scheduler/appoint-scheduler.component';
import { InterceptorModule } from '../interceptor/interceptor.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterNurseComponent,
    AppointSchedulerComponent,
    
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    InterceptorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
