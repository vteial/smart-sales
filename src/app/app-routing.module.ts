import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SettingsComponent } from './modules/general/settings/settings.component';
import { SignInComponent } from './modules/general/sign-in/sign-in.component';
import {SignUpComponent} from './modules/general/sign-up/sign-up.component';
import {CustomerListComponent} from './modules/application/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, },
  { path: 'settings', component: SettingsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
