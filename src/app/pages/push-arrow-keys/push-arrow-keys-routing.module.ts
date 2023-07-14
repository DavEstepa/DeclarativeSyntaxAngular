import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushArrowKeysComponent } from './container/push-arrow-keys.component';

const routes: Routes = [
  {
    path: '',
    component: PushArrowKeysComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushArrowKeysRoutingModule { }
