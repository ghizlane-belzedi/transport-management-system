import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ManagementComponent } from './management/management.component';



@NgModule({
  declarations: [
    SubscriptionComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubscriptionsModule { }
