import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimesService } from '../../timer/times.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  getDate: boolean = false;
  constructor(private timeService: TimesService) { }


  workdayForm: FormGroup = new FormGroup({
    'workdate': new FormControl(
      null, [Validators.required])
  });


  getWorkTimes() {
    this.getDate = true;
  }

}
