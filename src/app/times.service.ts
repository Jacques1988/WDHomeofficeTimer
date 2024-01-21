import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WorkTime } from './models/workTime';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TimesService {
  setTimesPath = environment.setTimesDataUrl;
  workDataPath = environment.fetchUrlOverview;
  workTimes: WorkTime[] = [];

  constructor(
    private httpClient: HttpClient,
  ) { }


  saveWorkTimes(data: WorkTime): Observable<WorkTime[]> {
    return this.httpClient.post<WorkTime[]>(this.setTimesPath, data);
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
