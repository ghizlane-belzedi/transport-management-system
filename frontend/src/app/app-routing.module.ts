import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { HttpClientModule } from '@angular/common/http';
import { AbonnementFormComponent } from './app-admin/add-abon/add-abon.component';
import { AppUserComponent } from './app-user/app-user.component';
import { TicketComponent } from './app-user/ticket/ticket.component';
import { BusLocationComponent } from './app-user/bus-location/bus-location.component';
import { TrajetComponent } from './app-user/trajet/trajet.component';
import { AddUserComponent } from './app-admin/add-user/add-user.component';
import { AppDriverComponent } from './app-driver/app-driver.component';
import { AddBusComponent } from './app-admin/add-bus/add-bus.component';
import { busconsul } from './app-driver/bus-consul/bus-consul.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'login',component:LoginComponent},
  { path:'trajet', component: AddTrajetComponent },
  { path:'voirtrajet', component: TrajetComponent },
  { path:'abon', component: AbonnementFormComponent},
  { path:'ticket', component: TicketComponent},
  { path:'suivi', component: BusLocationComponent},
  { path:'ajouterUser', component: AddUserComponent },
  {path:'driver',component:AppDriverComponent},
  { path:'ajouterbus', component: AddBusComponent },
  { path:'buscon', component: busconsul },

  { path:'user', component: AppUserComponent ,
    children: [
      { path:'ticket', component: TicketComponent},
      { path:'suivi', component: BusLocationComponent},
      { path:'voirtrajet', component: TrajetComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' } 
    ]
  },
  {
    path:'admin', component: AppAdminComponent,
    children: [
      { path:'trajet', component: AddTrajetComponent },
      { path:'abon', component: AbonnementFormComponent},
      { path:'ajouterUser', component: AddUserComponent },
      { path:'ajouterbus', component: AddBusComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,],
  exports: [RouterModule]
},
)
export class AppRoutingModule { }
