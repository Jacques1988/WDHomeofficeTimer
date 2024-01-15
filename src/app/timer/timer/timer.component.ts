import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/timer/times.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  runTimer: boolean = false;
  date: string = '';
  username: string = '';
  constructor(
    private timesService: TimesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const userId = this.authService.getUserId();

  }

  onStart() {
    this.runTimer = true;
    if (this.runTimer === true) {
      let stopBtn = document.getElementById('stop')!;
      stopBtn.style.backgroundColor = 'red';
      let startBtn = document.getElementById('start')!;
      let startTriangle = document.getElementById('start-triangle')!;
      startBtn.style.backgroundColor = 'grey';
      startTriangle.style.borderLeftColor = '#fff';
    }
    this.date = new Date().toLocaleDateString('de-de', { year: "numeric", month: "numeric", day: "numeric" }).padStart(2, '0');
    let start = this.setTime();
    this.timesService.setStartTime(start, this.date);
  }

  onStop() {
    this.runTimer = false;
    if (this.runTimer === false) {
      let stopBtn = document.getElementById('stop')!;
      stopBtn.style.backgroundColor = 'grey';
      let startBtn = document.getElementById('start')!;
      let startTriangle = document.getElementById('start-triangle')!;
      startBtn.style.backgroundColor = 'unset';
      startTriangle.style.borderLeftColor = 'green';
    }
    let end = this.setTime();
    this.timesService.setStopTime(end);
  }

  setTime() {
    let today = new Date();
    let std = today.getHours().toString().padStart(2, '0');
    let min = today.getMinutes().toString().padStart(2, '0');

    return std + ':' + min;
  }
}

