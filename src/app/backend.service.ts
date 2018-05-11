import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModuleItem, SummerServiceLocations } from './summer-service-locations';

@Injectable()
export class BackendService {

  private summerServiceLocationsUrl = '/assets/summer-service-locations.json';
  private mockDataUrl = '/assets/MOCK_DATA.json';

  constructor(private http: HttpClient) { }

  getSummerServiceLocations() {
    return this.http.get<SummerServiceLocations>(this.summerServiceLocationsUrl);
  }

  getMockData() {
    return this.http.get<ModuleItem[]>(this.mockDataUrl);
  }

}
