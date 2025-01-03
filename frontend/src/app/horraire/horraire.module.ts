import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorrairecheckComponent } from './horrairecheck/horrairecheck.component';
import { TrajetComponent } from './trajet/trajet.component';



@NgModule({
  declarations: [
    HorrairecheckComponent,
    TrajetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HorraireModule { }
