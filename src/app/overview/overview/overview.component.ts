import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.fetchWorkTimes();
  }


  workdayForm: FormGroup = new FormGroup({
    'workdate': new FormControl(
      this.currentDate, [Validators.required])
  });


  fetchWorkTimes() {
    this.getDate = true;
    const workdayUnformatted = this.workdayForm.get('workdate')!.value;
    const workdayformatted: any = this.datePipe.transform(workdayUnformatted, 'dd.MM.yyyy');
    this.currentDate = workdayformatted;
    this.timeService.fetchWorkTimes(
      this.userId,
      workdayUnformatted).subscribe(
        (data: any[]) => {
          this.workTimes = data.map(item => {
            return {
              user: item.userId.toString(),
              date: item.date,
              times: {
                workTimeStart: item.worktimeStart,
                workTimeFinish: item.worktimeFinish,
              }
            }
          });
          this.timeService.setWorktimes(this.workTimes);
          this.currentDate = workdayformatted;
        });
  }

}
