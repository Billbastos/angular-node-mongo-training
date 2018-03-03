import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from './signin.component';

const AUTH_ROUTES : Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES); // Using forChild because is just for this part of the application

