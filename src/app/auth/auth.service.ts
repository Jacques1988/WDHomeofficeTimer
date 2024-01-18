import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { authData } from './login/authData';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private user: any = {};

  headers = new HttpHeaders().append('Content-Type', 'application/JSON');
  loginUrl: string = environment.loginUrl;


  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }


  login(userName: string, userPassword: string): Observable<authData> {
    let data = { name: userName, password: userPassword };
    return this.httpClient.post<authData>(this.loginUrl, data, { headers: this.headers });
  }

  setAuthenticationState(user: User, authenticated: boolean) {
    this.user = new User(
      user.id,
      user.firstname,
      user.lastname,
      user.birthdate,
      user.username,
    );
    this.isAuthenticated = authenticated;
    this.isLoggedIn();
  }

  getUser(): Observable<User> {
    return this.user;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  isLoggedIn() {
    if (this.isAuthenticated && this.user.id) {
      this.router.navigate(['/timer/' + this.user.id]);
    } else {
      this.isAuthenticated = false;
      this.user.userId = '';
      this.router.navigate(['/']);
    }
  }
}


