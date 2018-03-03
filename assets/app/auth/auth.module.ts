import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { LogoutComponent } from "./logout.component";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { authRouting } from "./auth.routing";

// To dive deep into Angular2 Modules go to https://angular.io/guide/ngmodules

@NgModule({
  declarations: [
    LogoutComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [ 
    CommonModule, 
    ReactiveFormsModule,
    authRouting
  ]
})
export class AuthModule {

}