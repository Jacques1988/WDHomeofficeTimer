import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }



  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'userPassword': new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });


  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.userPassword).subscribe(response => {
        const user: any = response;
        this.loginFailed = false;
        this.authService.setAuthenticationState(user, true);
      }, (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
        this.loginFailed = true;
        this.loginForm.reset();
        this.router.navigate(['/']);
      })
    } else {
      this.loginFailed = true;
      this.router.navigate(['/']);
      return
    }
  }
}
