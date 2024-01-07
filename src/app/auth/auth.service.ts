import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

/* import { users } from '../users'; */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userId: string = "";
  loginUrl: string = environment.loginApiUrl;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login(userName: string, userPassword: string) {
    //todo: post mit httpClient erstmal ohne CryptoJS
  }



  // Fakelogin from frontend

  /*  login(userName: string, userPassword: string) {
     if (users.find(el => el.username === userName && el.userpassword === userPassword)) {
       this.userId = users.find(el => el.username === userName)!.id;
       this.isAuthenticated === true;
       this.router.navigate(['/timer']);
     } else {
       const failedContainer = document.getElementById('fail')!;
       failedContainer.style.color = 'red';
       failedContainer.innerHTML = 'Login Fehlgeschlagen';
     }
   } */
}
