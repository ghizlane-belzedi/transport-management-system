import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppUserComponent } from './app-user/app-user.component';

import { AppAdminComponent } from './app-admin/app-admin.component';
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { AbonnementFormComponent } from './app-admin/add-abon/add-abon.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './app-user/ticket/ticket.component';
import { BusLocationComponent } from './app-user/bus-location/bus-location.component';
import { TrajetComponent } from './app-user/trajet/trajet.component';
import { AddUserComponent } from './app-admin/add-user/add-user.component';
import { AppDriverComponent } from './app-driver/app-driver.component';
import { NotificationComponent } from './app-driver/notification/notification.component';
import { AddBusComponent } from './app-admin/add-bus/add-bus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppAdminComponent,
    AddTrajetComponent,
    AbonnementFormComponent,
    AppUserComponent,
    TicketComponent,
    BusLocationComponent,
    TrajetComponent,
    AddUserComponent,
    AppDriverComponent,
    NotificationComponent,
    AddBusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
