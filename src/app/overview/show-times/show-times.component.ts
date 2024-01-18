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
    /*  this.workDay = users[0].worktimes.date;
     this.workTime = users[0].worktimes.times; */
  }
}
