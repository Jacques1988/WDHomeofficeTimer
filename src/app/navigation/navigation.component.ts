import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  pathTitle: string = "";
  route: string = "";
  routeSubscription: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/':
            this.pathTitle = 'Login';
            break;
          case '/timer':
            this.pathTitle = 'Timer';
            break;
          case '/overview':
            this.pathTitle = 'Übersicht';
            break;
          default:
            this.pathTitle = "";
        }
      }
    })
  }

}
