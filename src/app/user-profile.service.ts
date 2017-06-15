import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  private currentUser: any = null;

  constructor() { }

  setCurrentUser(currentUser: any): void {
    this.currentUser = currentUser;
  }

  getUser(): any {
    return this.currentUser;
  }
}
