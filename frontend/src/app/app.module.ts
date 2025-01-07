import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppUserComponent } from './app-user/app-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AbonnementFormComponent } from './app-admin/add-abon/add-abon.component';
import { AddBusComponent } from './app-admin/add-bus/add-bus.component';
import { AddBussComponent } from './app-admin/add-bus/addbus/addbus.component';
import { AssignTrajetBusComponent } from './app-admin/add-bus/trajet-bus/trajetbus.component';
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { AddUserComponent } from './app-admin/add-user/add-user.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AppDriverComponent } from './app-driver/app-driver.component';
import { busconsul } from './app-driver/bus-consul/bus-consul.component';
import { BusLocationComponent } from './app-user/bus-location/bus-location.component';
import { TicketComponent } from './app-user/ticket/ticket.component';
import { TrajetComponent } from './app-user/trajet/trajet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppAdminComponent,
    AddTrajetComponent,
    AbonnementFormComponent,
    AppUserComponent,
    AddUserComponent,
    TicketComponent,
    TrajetComponent,
    AddUserComponent,
    AddBusComponent,
    AddBussComponent,
    AssignTrajetBusComponent,
    AppDriverComponent,
    busconsul,
    BusLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
