import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontawesomeIconsRoutingModule } from './fontawesome-icons-routing.module';
import { FontawesomeIconsComponent } from './container/fontawesome-icons.component';
import { ListComponent } from './components/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    FontawesomeIconsComponent,
    ListComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FontawesomeIconsRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class FontawesomeIconsModule { }
