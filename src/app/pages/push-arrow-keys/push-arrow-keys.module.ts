import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushArrowKeysRoutingModule } from './push-arrow-keys-routing.module';
import { PushArrowKeysComponent } from './container/push-arrow-keys.component';


@NgModule({
  declarations: [
    PushArrowKeysComponent
  ],
  imports: [
    CommonModule,
    PushArrowKeysRoutingModule
  ]
})
export class PushArrowKeysModule { }
