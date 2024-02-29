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
        const res: any = response;
        this.loginFailed = false;
        if (res.user !== null) {
          this.authService.setAuthenticationState(res.user, true);
        } else {
          this.loginFailed = true;
          this.errorMessage = res.message;
        }
      }, (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        this.loginFailed = true;
        this.loginForm.reset();
        console.log(this.errorMessage);
        this.router.navigate(['/']);
      })
    } else {
      this.loginFailed = true;
      console.log("Fehler bei der Anmeldung")
      this.router.navigate(['/']);
      return
    }
  }
}
