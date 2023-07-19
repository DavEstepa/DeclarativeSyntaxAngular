import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushArrowKeysRoutingModule } from './push-arrow-keys-routing.module';
import { PushArrowKeysComponent } from './container/push-arrow-keys.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { GeneralSceneComponent } from './components/general-scene/general-scene.component';


@NgModule({
  declarations: [
    PushArrowKeysComponent,
    MainLayoutComponent,
    GeneralSceneComponent
  ],
  imports: [
    CommonModule,
    PushArrowKeysRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class PushArrowKeysModule { }
