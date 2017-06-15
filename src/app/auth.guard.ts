import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserProfileService } from './user-profile.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userProfileService: UserProfileService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;

      // if (this.userProfileService.getUser()) {
      //   return true;
      // }

      // this.router.navigate(['/login']);
  }
}
