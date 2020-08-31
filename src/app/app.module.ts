import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
// import {SettingsComponent} from './modules/general/settings/settings.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignOutComponent} from './sign-out/sign-out.component';
// import {CustomerListComponent} from './modules/application/customer-list/customer-list.component';
import {WorkbenchComponent} from './workbench/workbench.component';
import {TodoState} from './workbench/todo/todo';
import { TodoListComponent } from './workbench/todo/todo-list/todo-list.component';
import { TodoEditComponent } from './workbench/todo/todo-edit/todo-edit.component';
import {ToastrModule} from 'ngx-toastr';
import { FieldConfigComponent } from './field-config/field-config.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    WorkbenchComponent,
    HomeComponent,
    // CustomerListComponent,
    // ContactListComponent,
    // TestimonialListComponent,
    FieldConfigComponent,
    // SettingsComponent,
    SignOutComponent,
    SignInComponent,
    TodoListComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BsDatepickerModule.forRoot(),
    // NgxsModule.forRoot([
    //   TodoState
    // ]),
    // NgxsLoggerPluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
