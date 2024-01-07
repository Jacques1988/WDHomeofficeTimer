import { Injectable } from '@angular/core';
import { users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor() { }

  getTimes(date: string) {
    console.log(date);
  }
}
