import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkTime } from '../models/workTime';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class TimesService {
  setTimesPath = environment.setTimesDataUrl;


  constructor(
    private httpClient: HttpClient,
  ) { }


  pushData(data: WorkTime): Observable<WorkTime[]> {
    return this.httpClient.post<WorkTime[]>(this.setTimesPath, data);
  }
}
