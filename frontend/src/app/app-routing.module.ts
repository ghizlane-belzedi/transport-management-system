import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementFormComponent } from './app-admin/add-abon/add-abon.component';
import { AddBusComponent } from './app-admin/add-bus/add-bus.component';
import { AddBussComponent } from './app-admin/add-bus/addbus/addbus.component';
import { AssignTrajetBusComponent } from './app-admin/add-bus/trajet-bus/trajetbus.component';
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { AddUserComponent } from './app-admin/add-user/add-user.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AppUserComponent } from './app-user/app-user.component';
import { SuiviComponent } from './app-user/suivi/suivi.component';
import { TicketComponent } from './app-user/ticket/ticket.component';
import { TrajetComponent } from './app-user/trajet/trajet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trajet', component: AddTrajetComponent },
  { path: 'abon', component: AbonnementFormComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'trajets', component: TrajetComponent },
  { path: 'ajouterbus', component: AddBusComponent },
  { path: 'ajouterrbus', component: AddBussComponent },
  { path: 'assign', component: AssignTrajetBusComponent },

  {
    path: 'admin',
    component: AppAdminComponent,
    children: [
      { path: 'trajet', component: AddTrajetComponent },
      { path: 'abon', component: AbonnementFormComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'ajouterbus', component: AddBusComponent },
      { path: 'ajouterrbus', component: AddBussComponent },
      { path: 'assign', component: AssignTrajetBusComponent },

      { path: '', redirectTo: 'admin', pathMatch: 'full' },
    ],
  },
  {
    path: 'user',
    component: AppUserComponent,
    children: [
      { path: 'trajets', component: TrajetComponent },
      { path: 'ticket', component: TicketComponent },
      { path: 'suivi', component: SuiviComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
