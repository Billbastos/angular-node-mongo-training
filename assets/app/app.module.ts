import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageComponent } from './messages/message.component';
import { MessagesComponent } from './messages/messages.component';
import { routing } from './app.routing' ;
import { SignupComponent } from './auth/signup.component';

@NgModule({
    declarations: [ // All components / directives / pipes
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent, 
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [  BrowserModule, 
                FormsModule,
                routing, 
                ReactiveFormsModule,
                HttpModule ], // services injected other modules
    bootstrap: [ AppComponent ]
})
export class AppModule {

}