import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
environment.mode = 'prod';
environment.baseApiPrefix = 'https://nestmanager.pythonanywhere.com';
if (window.location.hostname.indexOf('test') > -1) {
  environment.mode = 'test';
  environment.baseApiPrefix = 'https://nestmanagertest.pythonanywhere.com';
}
if (window.location.hostname.indexOf('localhost') > -1
  || window.location.hostname.indexOf('dev') > -1) {
  environment.mode = 'dev';
  environment.baseApiPrefix = 'https://nestmanagerdev.pythonanywhere.com';
}
if (window.location.hostname.indexOf('github') > -1) {
  environment.mode = 'propd';
  environment.baseApiPrefix = 'https://nestmanager.pythonanywhere.com';
}
// console.log(document.location.search);
const usp = new URLSearchParams(document.location.search);
if (usp.has('mode')) {
  const mode = usp.get('mode');
  if (mode === 'prod') {
    environment.mode = mode;
    environment.baseApiPrefix = 'https://nestmanager.pythonanywhere.com';
  }
  if (mode === 'test') {
    environment.mode = mode;
    environment.baseApiPrefix = 'https://nestmanagertest.pythonanywhere.com';
  }
  if (mode === 'local') {
    environment.mode = mode;
    environment.baseApiPrefix = 'https://nestmanagerdev.pythonanywhere.com';
  }
}
console.log('Mode    : ' + environment.mode);
console.log('Backend : ' + environment.baseApiPrefix);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
