import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { LoginComponent } from './login/login.component';

import { UserProfileService } from './user-profile.service';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NewsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserProfileService,
    AuthGuard,
    LoginService // TODO: consider to move down into Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
