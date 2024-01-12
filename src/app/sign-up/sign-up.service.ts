import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signUpData } from './signUpData';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  headers: {} = new HttpHeaders().append('Content-Type', 'application/JSON');
  signUpUrl: string = environment.signUpUrl

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }


  signUp(data: {}): Observable<signUpData> {
    return this.httpClient.post<signUpData>(this.signUpUrl, data, { headers: this.headers });
  }


}
