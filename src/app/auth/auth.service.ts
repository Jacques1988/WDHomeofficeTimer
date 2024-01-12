import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { authData } from './login/authData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userId: string = "";
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

  setAuthenticationState(userID: string, authenticated: boolean) {
    this.userId = userID;
    this.isAuthenticated = authenticated;
    this.isLoggedIn();
  }

  getUserId() {
    return this.userId;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  isLoggedIn() {
    if (this.isAuthenticated && this.userId) {
      this.router.navigate(['/timer']);
    } else {
      this.isAuthenticated = false;
      this.userId = '';
      this.router.navigate(['/']);
    }
  }
}


