import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://restcountries.com/v3.1/region/europe';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountries() {
    return (this.httpClient.get<any>(`${this.baseUrl}`));
  };
};
