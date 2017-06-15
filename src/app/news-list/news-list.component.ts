import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public user;
  news: FirebaseListObservable<any[]>;

  constructor(
    private userProfileService: UserProfileService,
    private loginService: LoginService,
    private db: AngularFireDatabase) {
      this.news = db.list('/news');
    }

  ngOnInit() {
    this.user = this.userProfileService.getUser();
  }

  printUser() {
    console.log(this.user.email);
  }

  addNews() {
    this.news.push({
      title: 'MY NEWS',
      text: 'Hello, here is the news',
      // author: this.user.email
    });
  }

}
