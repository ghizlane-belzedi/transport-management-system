import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcheterComponent } from './acheter/acheter.component';
import { GererComponent } from './gerer/gerer.component';



@NgModule({
  declarations: [
    AcheterComponent,
    GererComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketsModule { }
