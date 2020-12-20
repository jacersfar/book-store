import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ClientPlatformModule } from './client-platform/client-platform.module';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => AuthenticationModule },
  { path: 'home', loadChildren: () => ClientPlatformModule },
  { path: 'admin/dashboard', loadChildren: () => AdminDashboardModule},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
