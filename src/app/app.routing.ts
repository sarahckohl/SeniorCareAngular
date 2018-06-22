import {  Routes, RouterModule  } from '@angular/router';

import { LoginComponent} from './views/user/login/login.component';
import { RegisterComponent }  from './views/user/register/register.component';
import { RegisterNurseComponent } from './views/user/register-nurse/register-nurse.component';
import { CalendarComponent } from './views/user/calendar/calendar.component';
import { AvailableComponent } from './views/user/available/available.component';
import { AppointmentComponent } from './views/user/appointment/appointment.component';
import { CreateComponent } from './views/user/create/create.component';
import { LandingPageComponent } from './views/user/landing-page/landing-page.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register_patient', component: RegisterComponent },
    { path: 'register_nurse', component: RegisterNurseComponent},
    { path: 'calendar', component: CalendarComponent },
    { path: 'available', component: AvailableComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path:  'create', component: CreateComponent },
    { path: "", component: LandingPageComponent }

];


export const routing = RouterModule.forRoot(appRoutes);


