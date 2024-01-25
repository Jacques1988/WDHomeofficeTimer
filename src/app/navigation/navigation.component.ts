import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  signUp: boolean = true;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.IsAuthenticated.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }


  onSignUpPage() {
    this.signUp = !this.signUp;
  }

  isLoggedOut() {
    this.isLoggedIn = false;
  }


}

