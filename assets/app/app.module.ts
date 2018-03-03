import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MessageModule } from './messages/message.module';

import { AppComponent } from "./app.component";
import { routing } from './app.routing' ;
import { SignupComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [ // All components / directives / pipes
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [  BrowserModule, 
                routing, 
                HttpModule,
                MessageModule ], // services injected other modules
    providers: [ AuthService, ErrorService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}