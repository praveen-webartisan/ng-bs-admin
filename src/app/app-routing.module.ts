import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components:
import { DashboardComponent } from 'src/app/components/pages/dashboard/dashboard.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { ErrorComponent } from 'src/app/components/pages/error/error.component';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },

  // Initial Route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', pathMatch: 'full', component: ErrorComponent, data: {errorCode: 404} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
