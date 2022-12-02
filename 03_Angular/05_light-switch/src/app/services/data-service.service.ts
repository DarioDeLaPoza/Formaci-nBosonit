import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  turnOn$ = new EventEmitter<boolean>();
  color$ = new EventEmitter<string>();
};
