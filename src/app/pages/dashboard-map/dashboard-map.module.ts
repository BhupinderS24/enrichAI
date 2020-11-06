import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMapRoutingModule } from './dashboard-map-routing.module';
import { DashboardMapComponent } from './dashboard-map.component';


@NgModule({
  declarations: [DashboardMapComponent],
  imports: [
    CommonModule,
    DashboardMapRoutingModule
  ]
})
export class DashboardMapModule { }
