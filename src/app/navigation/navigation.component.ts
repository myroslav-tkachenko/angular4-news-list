import { Component } from '@angular/core';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public user;

  constructor(
    private userProfileService: UserProfileService,
    private loginService: LoginService) {
      userProfileService.userChanged.subscribe((user) => {
        this.user = user;
      });
  }

  logout() {
    this.loginService.logout();
  }
}
