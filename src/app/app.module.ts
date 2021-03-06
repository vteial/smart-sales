import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import {ClipboardModule} from 'ngx-clipboard';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ToastrModule} from 'ngx-toastr';
import {NgxPrettyCheckboxModule} from 'ngx-pretty-checkbox';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {FieldConfigComponent} from './field-config/field-config.component';
import {SettingsComponent} from './settings/settings.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import {WorkbenchComponent} from './workbench/workbench.component';
import {TodoListComponent} from './workbench/todo/todo-list/todo-list.component';
import {TodoEditComponent} from './workbench/todo/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    WorkbenchComponent,
    HomeComponent,
    SettingsComponent,
    FieldConfigComponent,
    TestimonialComponent,
    SignOutComponent,
    SignInComponent,
    TodoListComponent,
    TodoEditComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    ClipboardModule,
    NgxWebstorageModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxPrettyCheckboxModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    InfiniteScrollModule,
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
