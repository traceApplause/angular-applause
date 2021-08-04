import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { } 
  private countriesUrl = 'http://localhost:8080/FindTesters/devices/all';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    })
  };

  getDeviceList(): Observable<String[]> {
    return this.httpClient.get<String[]>(this.countriesUrl);
  }



}

interface GetDevices {
  devices: String[];  
}