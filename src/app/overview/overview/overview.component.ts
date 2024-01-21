import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimesService } from '../../times.service';
import { ActivatedRoute } from '@angular/router';
import { WorkTime } from 'src/app/models/workTime';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  getDate: boolean = false;
  userId: string = '';
  currentDate: string = new Date().toISOString().substring(0, 10);
  workTimes: WorkTime[] = [];

  constructor(
    private timeService: TimesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!;
  }


  workdayForm: FormGroup = new FormGroup({
    'workdate': new FormControl(
      null, [Validators.required])
  });


  fetchWorkTimes() {
    this.getDate = true;
    this.timeService.fetchWorkTimes(
      this.userId,
      this.workdayForm.value.workdate).subscribe(
        data => {
          this.workTimes = data;
          this.timeService.setWorktimes(this.workTimes);
        });

  }

}
