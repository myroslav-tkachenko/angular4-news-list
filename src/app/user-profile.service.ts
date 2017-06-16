import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserProfileService {
  private currentUser;
  public userChanged: EventEmitter<any>;

  constructor() {
    this.userChanged = new EventEmitter();
  }

  setCurrentUser(currentUser: any): void {
    this.currentUser = currentUser;
    this.userChanged.emit(currentUser);
  }

  getUser(): any {
    return this.currentUser;
  }
}
