import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Route } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  pathTitle: string = "";
  route: string = "";
  signUp: boolean = true;
  trackRoute: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

    this.trackRoute = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/':
            this.pathTitle = 'Login';
            this.signUp = true;
            this.route = 'signUp'
            break;
          case '/signUp':
            this.pathTitle = 'Sign Up'
            this.route = 'login';
            break;
          case '/timer':
            this.pathTitle = ' - Start';
            this.signUp = false;
            break;
          case '/overview':
            this.pathTitle = 'Übersicht';
            this.signUp = false;
            break;
          default:
            this.pathTitle = "";
        }
      }
    });
  }

  checkRoute() {
    if (this.router.url === '/signUp') {
      this.route = 'signUp';
      this.pathTitle = 'Login'
    }
    if (this.router.url === 'login') {
      this.route = 'login';
    }
  }
}

