import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  runTimer: boolean = false;

  constructor() { }

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

    return this.setTime();
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
    return this.setTime();
  }

  setTime() {
    let today = new Date();
    let std = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    return std + ':' + min + ':' + sec;
  }
}

