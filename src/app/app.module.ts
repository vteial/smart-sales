import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SettingsComponent } from './modules/general/settings/settings.component';
import { SignInComponent } from './modules/general/sign-in/sign-in.component';
import { SignUpComponent } from './modules/general/sign-up/sign-up.component';
import { CustomerListComponent } from './modules/application/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SettingsComponent,
    SignInComponent,
    SignUpComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
