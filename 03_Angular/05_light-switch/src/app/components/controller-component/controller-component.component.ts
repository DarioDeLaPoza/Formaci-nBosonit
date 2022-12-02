import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css']
})
export class ControllerComponentComponent {

  constructor(
    private ds: DataServiceService
  ) { }

  setBold: boolean = false;

  setColor($event: any) {
    this.ds.color$.emit($event.target.value);
  };


  prueba($event: any) {
    if ($event.target.checked) {
      this.ds.turnOn$.emit(true);
      this.setBold = true;
    } else {
      this.ds.turnOn$.emit(false);
      this.setBold = false;
    };
  };
};
