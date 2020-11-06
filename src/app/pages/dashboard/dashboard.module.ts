import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from '../../components/table/table.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { MatTabsModule } from '@angular/material/tabs';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SmallBoxInfoComponent } from '../../components/small-box-info/small-box-info.component';
import { OverallDayComponent } from '../../components/overall-day/overall-day.component';
import { BigBoxInfoComponent } from '../../components/big-box-info/big-box-info.component';
import { ChartsComponent } from '../../components/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    ToolbarComponent,
    OverallDayComponent,
    SmallBoxInfoComponent,
    BigBoxInfoComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    ChartsModule,
    HttpClientModule,
  ],
  entryComponents: [],
})
export class DashboardModule {}
