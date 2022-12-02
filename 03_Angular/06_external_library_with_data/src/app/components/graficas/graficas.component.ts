import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Países de Europa - Población', hoverBackgroundColor: 'red' },
    ]
  };

  constructor(
    private ds: DataService
  ) { }

  ngOnInit(): void {
    this.ds.getCountries()
      .subscribe(data => {
        let labels = data.map((country: { name: { common: any; }; }) => country.name.common);
        this.barChartData.labels = labels;

        let popu = data.map((country: { population: any; }) => country.population);
        this.barChartData.datasets[0].data = popu;

        this.chart?.update();
      });
  };
};
