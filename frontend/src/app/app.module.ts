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
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { AddUserComponent } from './app-admin/add-user/add-user.component';
import { AppAdminComponent } from './app-admin/app-admin.component';

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
