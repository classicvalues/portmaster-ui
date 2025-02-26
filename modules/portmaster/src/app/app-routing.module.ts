import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppViewComponent } from './pages/app-view';
import { MonitorPageComponent } from './pages/monitor';
import { SettingsComponent } from './pages/settings/settings';
import { SpnPageComponent } from './pages/spn';
import { SupportPageComponent } from './pages/support';
import { SupportFormComponent } from './pages/support/form';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'monitor',
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'app',
    pathMatch: 'full',
    redirectTo: 'app/overview',
  },
  {
    path: 'app/overview',
    component: AppViewComponent,
  },
  {
    path: 'app/:source/:id',
    component: AppViewComponent,
  },
  {
    path: 'monitor',
    component: MonitorPageComponent,
  },
  {
    path: 'monitor/profile/:source/:profile',
    redirectTo: 'monitor',
  },
  {
    path: 'support',
    component: SupportPageComponent,
  },
  {
    path: 'support/:id',
    component: SupportFormComponent,
  },
  {
    path: 'spn',
    component: SpnPageComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
