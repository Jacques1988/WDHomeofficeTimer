import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkTime } from './models/workTime';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TimesService {
  setTimesPath = environment.setTimesDataUrl;
  workDataPath = environment.fetchUrlOverview;

  constructor(
    private httpClient: HttpClient
  ) { }


  saveWorkTimes(data: WorkTime): Observable<WorkTime[]> {
    return this.httpClient.post<WorkTime[]>(this.setTimesPath, data);
  }

  fetchWorkTimes(id: string): Observable<WorkTime[]> {
    const userId = id;
    return this.httpClient.get<WorkTime[]>(this.workDataPath + '/' + userId);
  }
}
