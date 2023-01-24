import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { FarmComponent } from './farm/farm.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegistrationComponent } from './registration/registration.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'farm', component: FarmComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'details', component: DetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
