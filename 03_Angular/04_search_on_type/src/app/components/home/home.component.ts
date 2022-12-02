import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Universidad } from 'src/app/interfaces/unis.interface';
import { ServiceUniService } from 'src/app/services/service-uni.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  espana: boolean = true;
  reinoUnido: boolean = false;
  portugal: boolean = false;
  selectedCountry: string = 'spain';
  unis: any[] = [];

  debouncer: Subject<string> = new Subject();

  constructor(
    private ServiceUni: ServiceUniService
  ) { }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(valor => {
        this.ServiceUni.getByCountry(this.selectedCountry).subscribe(resp => {
          this.unis = resp.filter((universidad: Universidad) => {
            return universidad.name.toLowerCase().includes(valor.toLowerCase())
          });
        });
      });
  };

  //================================Observable======================================//
  getUnis(country: string) {
    this.selectedCountry = country;
    if (country === 'spain') {
      this.espana = true; this.reinoUnido = false; this.portugal = false;
    } else if (country === 'united kingdom') {
      this.reinoUnido = true; this.espana = false; this.portugal = false
    } else if (country === 'portugal') { this.portugal = true; this.espana = false; this.reinoUnido = false };

    this.ServiceUni.getByCountry(country).subscribe(resp => { this.unis = resp });
  };

  recibirTexto($event: any) {
    this.debouncer.next($event.target.value);
  }

  //================================Promesas========================================//
  /* async getUnis(country: string) {
    this.selectedCountry = country;
    if (country === 'spain') {
      this.espana = true; this.reinoUnido = false; this.portugal = false;
    } else if (country === 'united kingdom') {
      this.reinoUnido = true; this.espana = false; this.portugal = false
    } else if (country === 'portugal') { this.portugal = true; this.espana = false; this.reinoUnido = false };

    this.unis = await this.ServiceUni.getByCountry(country)
  };

  async filterByCountry($event: any) {
    const response = await this.ServiceUni.getByCountry(this.selectedCountry);
    this.unis = response.filter((universidad: Universidad) => {
      return universidad.name.toLowerCase().includes($event.target.value.toLowerCase())
    });
  } */
};
