import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TimesService {
  startTime: string = '';
  stopTime: string = '';
  date: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }



  setStartTime(time: string, date: string) {
    this.date = date;
    this.startTime = time;
  }

  setStopTime(time: string) {
    this.stopTime = time;
    /* this.pushTime(); */
  }

  /* pushTime() {
    let workTime = this.startTime + ' - ' + this.stopTime;
    users[0].worktimes.times?.push(workTime);
  } */
}
