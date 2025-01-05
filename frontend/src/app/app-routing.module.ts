import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AddTrajetComponent } from './app-admin/add-trajet/add-trajet.component';
import { HttpClientModule } from '@angular/common/http';
import { AbonnementFormComponent } from './app-admin/add-abon/add-abon.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'login',component:LoginComponent},
  { path:'trajet', component: AddTrajetComponent },
  { path:'abon', component: AbonnementFormComponent},
  {
    path:'admin', component: AppAdminComponent,
    children: [
      { path:'trajet', component: AddTrajetComponent },
      { path:'abon', component: AbonnementFormComponent},
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
