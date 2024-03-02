import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WorkTime } from './models/workTime';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TimesService {
  setTimesPath = environment.setTimesDataUrl;
  workDataPath = environment.fetchUrlOverview;
  workTimes: WorkTime[] = [];
  workTimesObservable = of(this.workTimes);
  headers: {} = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient,
  ) { }


  saveWorkTimes(data: WorkTime): Observable<WorkTime[]> {
    return this.httpClient.post<WorkTime[]>(this.setTimesPath, data, { headers: this.headers });
  }

  fetchWorkTimes(id: string, date: string): Observable<WorkTime[]> {
    const userId = id;
    const workDate = date;
    let fetchParams = new HttpParams();
    fetchParams = fetchParams.append('user', userId);
    fetchParams = fetchParams.append('date', workDate);
    return this.httpClient.get<WorkTime[]>(this.workDataPath, { params: fetchParams });
  }

  setWorktimes(data: WorkTime[]) {
    this.workTimes = data;
  }

}
