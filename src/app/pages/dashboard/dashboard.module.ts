import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterPointerComponent } from './components/master-pointer/master-pointer.component';
import { BasicChartLineComponent } from './components/basic-chart-line/basic-chart-line.component';
import { ChartModule } from 'primeng/chart';
import {MatButtonModule} from '@angular/material/button';
import { BasicChartPieComponent } from './components/basic-chart-pie/basic-chart-pie.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MasterPointerComponent,
    BasicChartLineComponent,
    BasicChartPieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    ChartModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
