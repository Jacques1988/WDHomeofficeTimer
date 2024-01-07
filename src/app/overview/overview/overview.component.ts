import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimesService } from '../times.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  today: string = "";
  getDate: boolean = false;
  constructor(private timeService: TimesService) { }


  workdayForm: FormGroup = new FormGroup({
    'workdate': new FormControl(
      null, [Validators.required])
  });


  getWorkTimes() {
    this.getDate = true;
    this.timeService.getTimes(this.workdayForm.value);
  }

}
