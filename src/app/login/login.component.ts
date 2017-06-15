import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.isLogged = this.loginService.isLogged();
  }

  login() {
    this.loginService.login('myroslav.tkachenko@gmail.com', 'M171078')
      .then(() => {
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
