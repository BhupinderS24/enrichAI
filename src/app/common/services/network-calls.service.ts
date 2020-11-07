import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NetworkCallsService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getChartData() {
    return this.http.get(`${this.url}16f8bae9-0f5b-4791-9742-081936a8e429`);
  }
}
