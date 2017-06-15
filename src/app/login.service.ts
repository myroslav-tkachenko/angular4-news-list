import { Injectable } from '@angular/core';

import { UserProfileService } from './user-profile.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(
    private userProfileService: UserProfileService,
    private afAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    // this.userProfileService.setCurrentUser({});

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.userProfileService.setCurrentUser(user);
          resolve(user);
        })
        .catch(function(error) {
          // Handle Errors here.
          console.log(error);
          reject(error);
        });
    })
  }

  logout(): void {
    // this.userProfileService.setCurrentUser(null);
    this.afAuth.auth.signOut()
      .then(() => {
        this.userProfileService.setCurrentUser(null);
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
      });
  }

  isLogged(): any {
    return this.userProfileService.getUser();
  }
}
