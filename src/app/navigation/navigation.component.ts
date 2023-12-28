import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  pathTitle: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.pathTitle = 'Login';
    }
  }
}
