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

  constructor(
    private loginService: LoginService,
    private userProfileService: UserProfileService,
    private router: Router) {
      userProfileService.userChanged.subscribe((user) => {
        this.user = this.userProfileService.getUser();
        if (this.user) {
          this.router.navigate(['/']);
        }
        this.router.navigate(['/login']);
      });
    }

  ngOnInit() {
  }

  login() {
    this.loginService.login('myroslav.tkachenko@gmail.com', 'M171078')
      .then(() => {
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.loginService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
