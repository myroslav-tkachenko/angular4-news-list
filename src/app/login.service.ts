import { Injectable } from '@angular/core';

import { UserProfileService } from './user-profile.service';

@Injectable()
export class LoginService {
  constructor(private userProfileService: UserProfileService) { }

  login() {
    this.userProfileService.setCurrentUser({});
  }

  logout(): void {
    this.userProfileService.setCurrentUser(null);
  }

  isLogged(): boolean {
    return this.userProfileService.getUser();
  }
}
