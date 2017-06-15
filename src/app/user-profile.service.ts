import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  private currentUser;

  constructor() { }

  setCurrentUser(currentUser: any): void {
    this.currentUser = currentUser;
  }

  getUser(): any {
    return this.currentUser;
  }
}
