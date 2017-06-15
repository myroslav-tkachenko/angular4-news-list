import { Component, OnInit } from '@angular/core';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public user;

  constructor(
    private userProfileService: UserProfileService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.userProfileService.getUser();
  }

  printUser() {
    console.log(this.user.email);
  }

}
