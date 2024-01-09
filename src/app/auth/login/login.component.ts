import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }


  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]')]),
    'userPassword': new FormControl(null, Validators.required)
  });


  onSubmit() {
    this.authService.login(this.loginForm.value.userName, this.loginForm.value.userPassword).subscribe(response => { console.log(response) })
  }





}
