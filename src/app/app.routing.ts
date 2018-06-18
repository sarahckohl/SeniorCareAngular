import {  Routes, RouterModule  } from '@angular/router';

import { LoginComponent} from './views/user/login/login.component';
import { RegisterComponent }  from './views/user/register/register.component';
import { RegisterNurseComponent } from './views/user/register-nurse/register-nurse.component';
import { CalendarComponent } from './views/user/calendar/calendar.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register_patient', component: RegisterComponent },
    { path: 'register_nurse', component: RegisterNurseComponent},
    { path: 'calendar', component: CalendarComponent }
];


export const routing = RouterModule.forRoot(appRoutes);


