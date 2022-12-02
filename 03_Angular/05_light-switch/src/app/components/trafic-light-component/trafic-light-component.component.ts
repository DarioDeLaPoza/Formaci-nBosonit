import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-trafic-light-component',
  templateUrl: './trafic-light-component.component.html',
  styleUrls: ['./trafic-light-component.component.css']
})
export class TraficLightComponentComponent implements OnInit, OnDestroy {

  turnOn: boolean = false;
  color: string = 'rojo';

  turnOnSubscription!: Subscription;
  colorSubscription!: Subscription;

  constructor(
    private ds: DataServiceService
  ) { }

  ngOnInit(): void {
    this.turnOnSubscription = this.ds.turnOn$.subscribe(value => this.turnOn = value);
    this.colorSubscription = this.ds.color$.subscribe(color => this.color = color);
  };

  ngOnDestroy(): void {
    this.turnOnSubscription.unsubscribe();
    this.colorSubscription.unsubscribe();
  };
};
