import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signedUp: boolean = false;

  signUpForm: FormGroup = new FormGroup({
    'firstname': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'lastname': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'birthdate': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    'passwordrepeat': new FormControl(null, [Validators.required, Validators.minLength(4)])
  });


  constructor(
    private signUpService: SignUpService,
    private authService: AuthService,
    private router: Router,
  ) { }


  onSubmit() {
    this.signUpService.signUp(this.signUpForm.value).subscribe(response => {
      try {
        alert("Registrierung erfolgreich");
        this.router.navigate(['/']);
      } catch (error) {
        alert("Uuups.... Es ist etwas scheif gelaufen " + error);
      }
    });
  }




}
