import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushArrowKeysRoutingModule } from './push-arrow-keys-routing.module';
import { PushArrowKeysComponent } from './container/push-arrow-keys.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    PushArrowKeysComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    PushArrowKeysRoutingModule,
    MatGridListModule
  ]
})
export class PushArrowKeysModule { }
