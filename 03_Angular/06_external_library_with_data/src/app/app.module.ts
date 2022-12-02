import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { GraficaLinealComponent } from './components/grafica-lineal/grafica-lineal.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    GraficaLinealComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
