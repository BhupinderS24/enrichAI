import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dashboard-map',
    loadChildren: () =>
      import('./pages/dashboard-map/dashboard-map.module').then(
        (m) => m.DashboardMapModule
      ),
  },
];

// ng generate module orders --route orders --module app.module   ---- To generate new module

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
