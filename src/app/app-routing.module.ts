import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (it) => it.DashboardModule
      ),
  },
  {
    path: 'list-icons',
    loadChildren: () =>
      import('./pages/fontawesome-icons/fontawesome-icons.module').then(
        (it) => it.FontawesomeIconsModule
      ),
  },
  {
    path: 'push-keys',
    loadChildren: () =>
      import('./pages/push-arrow-keys/push-arrow-keys.module').then(
        (it) => it.PushArrowKeysModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
