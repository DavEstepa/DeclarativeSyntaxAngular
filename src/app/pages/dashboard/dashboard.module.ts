import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterPointerComponent } from './components/master-pointer/master-pointer.component';
import { BasicChartLineComponent } from './components/basic-chart-line/basic-chart-line.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MasterPointerComponent,
    BasicChartLineComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule { }
