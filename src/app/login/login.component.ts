import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

import { UserProfileService } from '../user-profile.service';
import 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public wrongLogin: boolean;

  constructor(
    private loginService: LoginService,
    private userProfileService: UserProfileService,
    private router: Router) {
      userProfileService.userChanged.subscribe((user) => {
        if (this.user = this.userProfileService.getUser()) {
          this.router.navigate(['/']);
          return;
        }
        this.router.navigate(['/login']);
      });
    }

  ngOnInit() {
    this.user = this.userProfileService.getUser();
  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.loginService.login(email.value, password.value)
      .then(() => {
        console.log('logged');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.wrongLogin = true;
        console.log(err);
      });
  }

  logout() {
    this.loginService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
