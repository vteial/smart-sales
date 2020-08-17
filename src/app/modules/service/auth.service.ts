import {Injectable, NgZone} from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    // Saving user data in localstorage when logged in and setting up null when logged out
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // SignUp(email, password) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       window.alert('You have been successfully registered!');
  //       console.log(result.user);
  //     }).catch((error) => {
  //       window.alert(error.message);
  //     });
  // }
  //
  // // Sign in with email/password
  // SignIn(email, password) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       this.router.navigate(['home']);
  //     }).catch((error) => {
  //       window.alert(error.message);
  //     });
  // }
  //
  // // SignOut method for logging out from the Angular/Firebase app
  // SignOut() {
  //   return this.afAuth.auth.signOut().then(() => {
  //     this.router.navigate(['sign-in']);
  //   });
  // }
}
