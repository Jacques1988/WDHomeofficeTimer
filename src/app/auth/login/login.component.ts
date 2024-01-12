import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { authData } from './authData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFailed: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]')]),
    'userPassword': new FormControl(null, Validators.required),
  });


  onSubmit() {
    this.authService.login(this.loginForm.value.userName, this.loginForm.value.userPassword).subscribe(response => {
      let userID: any = response;
      this.authService.setAuthenticationState(userID, true)
    })
  }





}
