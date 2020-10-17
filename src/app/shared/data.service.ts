import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class Helper {
  static isNextStep: boolean = true;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  applyFilter = new Subject<any>();

  getLaunchData(queryParam: string) {
    if (!queryParam) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100',
      {headers: {'Accept-Encoding': 'gzip, compress, br'}});
    }
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100' + queryParam);
  }
}
