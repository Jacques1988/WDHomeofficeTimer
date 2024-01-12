import { Component, resolveForwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm: FormGroup = new FormGroup({
    'firstname': new FormControl(null, [Validators.required]),
    'lastname': new FormControl(null, [Validators.required]),
    'birthdate': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required]),
    'passwordrepeat': new FormControl(null, [Validators.required])
  });


  constructor(
    private signUpService: SignUpService,
    private authService: AuthService
  ) { }


  onSubmit() {
    this.signUpService.signUp(this.signUpForm.value).subscribe(response => {
      let userId: any = response;
      this.authService.setAuthenticationState(userId, true);
    });
  }




}
