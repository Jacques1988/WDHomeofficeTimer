import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    'userName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'userPassword': new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });


  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.userPassword).subscribe(response => {
        let userID: any = response;
        this.loginFailed = false;
        this.authService.setAuthenticationState(userID, true)
      }, error => {
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
