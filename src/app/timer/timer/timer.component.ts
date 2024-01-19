import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/timer/times.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { WorkTime } from './workTime';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  runTimer: boolean = false;
  userId: string = '';
  user: any;
  workTime: WorkTime = {
    user: '',
    date: '',
    times: {
      workTimeStart: "",
      workTimeFinish: "",
    },
  };

  constructor(
    private timesService: TimesService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.user = this.authService.getUser();
  }

  onStart() {
    this.runTimer = true;
    let today = new Date();
    let date = today.toLocaleDateString('de-DE');
    let time: string = this.setTime();
    this.workTime.user = this.userId;
    this.workTime.date = date;
    this.workTime.times.workTimeStart = time;
  }

  onStop() {
    this.runTimer = false;
    let end: string = this.setTime();
    this.workTime.times.workTimeFinish = end;
    this.timesService.pushData(this.workTime).subscribe(data => { console.log(data) })
  }

  setTime() {
    let today = new Date();
    let std = today.getHours().toString().padStart(2, '0');
    let min = today.getMinutes().toString().padStart(2, '0');

    return std + ':' + min;
  }
}

