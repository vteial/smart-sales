import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule} from 'ngx-webstorage';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SettingsComponent } from './modules/general/settings/settings.component';
import { SignInComponent } from './modules/general/sign-in/sign-in.component';
import { SignUpComponent } from './modules/general/sign-up/sign-up.component';
import { CustomerListComponent } from './modules/application/customer-list/customer-list.component';
import { WorkbenchComponent } from './modules/general/workbench/workbench.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SettingsComponent,
    SignInComponent,
    SignUpComponent,
    CustomerListComponent,
    WorkbenchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BsDatepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
