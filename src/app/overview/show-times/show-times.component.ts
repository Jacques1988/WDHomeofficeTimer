import { Component, OnInit } from '@angular/core';
import { WorkTime } from 'src/app/models/workTime';
import { TimesService } from 'src/app/times.service';


@Component({
  selector: 'app-show-times',
  templateUrl: './show-times.component.html',
  styleUrls: ['./show-times.component.scss']
})
export class ShowTimesComponent {

  workDay: string = '';
  workTime: any;

  constructor(
    private timeService: TimesService,
  ) { }

  ngOnInit() {

  }
}
