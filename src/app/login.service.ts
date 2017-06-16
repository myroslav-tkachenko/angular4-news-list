import { Injectable } from '@angular/core';

import { UserProfileService } from './user-profile.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  constructor(
    private userProfileService: UserProfileService,
    private afAuth: AngularFireAuth) {
      afAuth.auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Auth state changed: user logged IN');
          userProfileService.setCurrentUser(user);
        } else {
          console.log('Auth state changed: user logged OUT');
          userProfileService.setCurrentUser(null);
        }
      });
    }

  login(email: string, password: string): Promise<boolean> {
    // this.userProfileService.setCurrentUser({});

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.userProfileService.setCurrentUser(user);
          resolve(true);
        })
        .catch(function(error) {
          // Handle Errors here.
          console.log(error);
          reject(false);
        });
    })
  }

  logout(): Promise<boolean> {
    // this.userProfileService.setCurrentUser(null);

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(() => {
          console.log('signed out!');
          this.userProfileService.setCurrentUser(null);
          resolve(true);
        })
        .catch(function(error) {
          // Handle Errors here.
          reject(false);
          console.log(error);
        })
    });
  }

  isLogged(): any {
    return this.userProfileService.getUser();
  }
}
