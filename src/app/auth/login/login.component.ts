import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]')]),
    'userPassword': new FormControl(null, Validators.required)
  });


  onSubmit() {
    console.log(this.loginForm.value);
  }





}
