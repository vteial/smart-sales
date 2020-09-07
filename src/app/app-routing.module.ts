import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';
import {WorkbenchComponent} from './workbench/workbench.component';
import {HomeComponent} from './home/home.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {FieldConfigComponent} from './field-config/field-config.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'customers', component: CustomerListComponent},
  // {path: 'contacts', component: ContactListComponent},
  {path: 'testimonials', component: TestimonialComponent},
  {path: 'field-config', component: FieldConfigComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'sign-out', component: SignOutComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'workbench', component: WorkbenchComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
