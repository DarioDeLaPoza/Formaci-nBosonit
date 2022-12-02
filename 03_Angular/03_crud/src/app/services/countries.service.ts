import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = 'https://restcountries.com/v3.1/subregion/europe';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCountries(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(`${this.baseUrl}`);
  };
};
