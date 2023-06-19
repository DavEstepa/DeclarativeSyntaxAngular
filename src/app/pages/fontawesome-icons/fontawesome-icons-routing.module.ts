import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontawesomeIconsComponent } from './container/fontawesome-icons.component';

const routes: Routes = [
  {
    path: '',
    component: FontawesomeIconsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontawesomeIconsRoutingModule { }
