import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Tester } from '../models/tester';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  constructor(private httpClient: HttpClient) { } 
  private countriesUrl = 'http://localhost:8080/FindTesters/testers/allCountries';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    })
  };

  getCountryList(): Observable<String[]> {
    return this.httpClient.get<String[]>(this.countriesUrl);
  }

  getTesters(countries: string, devices: string): Observable<Tester[]>{
    let baseUrl = 'http://localhost:8080/FindTesters/testers/findTesters'
    
    let newUrl = baseUrl.concat('?country=');
    newUrl = newUrl.concat(countries);
    newUrl = newUrl.concat('&device=');
    newUrl = newUrl.concat(devices);
    console.log(newUrl);

    return this.httpClient.get<Tester[]>(newUrl);

  }
}

interface GetCountries {
  
  countries: String[];
  
}

interface GetTesters {
  
    testers: Tester[]
  
}