import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/timer/times.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  runTimer: boolean = false;
  date: string = '';
  userId: string = '';
  user: any;
  constructor(
    private timesService: TimesService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.user = this.authService.getUser();
  }

  onStart() {
    this.runTimer = true;
    this.date = new Date().toLocaleDateString('de-de', { year: "numeric", month: "numeric", day: "numeric" }).padStart(2, '0');
    let start = this.setTime();
    this.timesService.setStartTime(start, this.date);
    console.log(start);
  }

  onStop() {
    this.runTimer = false;
    let end = this.setTime();
    this.timesService.setStopTime(end);
    console.log(end);
  }

  setTime() {
    let today = new Date();
    let std = today.getHours().toString().padStart(2, '0');
    let min = today.getMinutes().toString().padStart(2, '0');

    return std + ':' + min;
  }
}

