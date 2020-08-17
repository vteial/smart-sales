// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  application: {
    name: 'Smart Sales'
  },
  firebase: {
    apiKey: 'AIzaSyCju2r_YqFZXBULi_eao33z3MTP8nyNwlc',
    authDomain: 'wybis-smart-sales.firebaseapp.com',
    databaseURL: 'https://wybis-smart-sales.firebaseio.com',
    projectId: 'wybis-smart-sales',
    storageBucket: 'wybis-smart-sales.appspot.com',
    messagingSenderId: '496697263840',
    appId: '1:496697263840:web:eb9e3b60b9005371667285',
    measurementId: 'G-7T7XJSKEBC'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
