import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkTime } from './timer/workTime';
import { mockTimes } from './timer/mockTimes';


@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  pushData(data: WorkTime): Observable<WorkTime[]> {
    mockTimes.push(data);
    console.log(mockTimes);
    return this.httpClient.post<WorkTime[]>("./mockTimes", data);
  }
}
