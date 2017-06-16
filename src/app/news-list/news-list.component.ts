import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from '../login.service';

import { News } from '../models/news';

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
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.userProfileService.getUser();
    this.news = this.db.list('/news');
  }

  printUser() {
    console.log(this.user.email);
  }

  addNews(titleInput: HTMLInputElement, textInput: HTMLInputElement) {
    this.news.push({
      title: titleInput.value,
      text: textInput.value,
      author: this.user.email
    });
    titleInput.value = '';
    textInput.value = '';
  }

}
