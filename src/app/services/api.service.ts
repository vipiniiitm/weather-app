import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://api.weatherstack.com/current?access_key=280909455962df4a6bdbac12a02a8c1f&query=';


  constructor(private http: HttpClient) { }

  getWeather(location) {
   return this.http.get(`${this.baseUrl}${location}`);
  }
}
