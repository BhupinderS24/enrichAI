import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SmallBoxInfoComponent } from '../../components/small-box-info/small-box-info.component';
import { OverallDayComponent } from '../../components/overall-day/overall-day.component';
import { ChartsComponent } from '../../components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    OverallDayComponent,
    SmallBoxInfoComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTabsModule,
    ChartsModule,
    HttpClientModule,
  ],
  entryComponents: [],
})
export class DashboardModule {}
