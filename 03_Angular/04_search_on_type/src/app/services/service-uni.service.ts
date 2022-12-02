import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Universidad } from '../interfaces/unis.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceUniService {

  baseUrl: string = 'http://universities.hipolabs.com/search?country=';

  constructor(
    private httpClient: HttpClient
  ) { }

  //================================Observable======================================//
  getByCountry(country: string): Observable<Array<Universidad>> {
    return (this.httpClient.get<Array<Universidad>>(`${this.baseUrl}${country}`));
  };

  //================================Promesas========================================//
  /* getByCountry(country: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${country}`));
  }; */
};
