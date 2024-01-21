import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-show-times',
  templateUrl: './show-times.component.html',
  styleUrls: ['./show-times.component.scss']
})
export class ShowTimesComponent {

  workDay: string = '';
  workTime: string = '';

  constructor() { }

  ngOnInit() {

  }
}
