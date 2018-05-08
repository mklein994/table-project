import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SummerServiceLocations } from './summer-service-locations';

@Injectable()
export class BackendService {

  private url: '/assets/summer-service-locations.json';

  constructor(private http: HttpClient) { }

  getSummerServiceLocations() {
    return this.http.get<SummerServiceLocations>(this.url);
  }

}
