import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppUserComponent } from './app-user/app-user.component';
import { TicketComponent } from './app-user/ticket/ticket.component';
import { TrajetComponent } from './app-user/trajet/trajet.component';
import { SuiviComponent } from './app-user/suivi/suivi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppUserComponent,
    TicketComponent,
    TrajetComponent,
    SuiviComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
