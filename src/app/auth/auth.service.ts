import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userId: string = "";
  constructor(private router: Router) { }


  login(userName: string, userPassword: string) {
    if (users.find(el => el.username === userName && el.userpassword === userPassword)) {
      this.userId = users.find(el => el.username === userName)!.id;
      this.isAuthenticated === true;
      this.router.navigate(['/timer']);
    } else {
      const failedContainer = document.getElementById('fail')!;
      failedContainer.style.color = 'red';
      failedContainer.innerHTML = 'Login Fehlgeschlagen';
    }

  }
}
