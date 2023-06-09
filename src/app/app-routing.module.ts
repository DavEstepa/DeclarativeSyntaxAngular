import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard-routing.module').then(
        (it) => it.DashboardRoutingModule
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
