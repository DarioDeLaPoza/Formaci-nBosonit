import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07_counter';

  counter: number = 0;
  step: number = 1;
  intervalo: any;
  countUp: boolean = true;
  countDown: boolean = false;

  accumulate(): void {
    if (this.countUp) {
      this.intervalo = setInterval(() => {
        this.counter += this.step;
      }, 1000)
    } else {
      this.intervalo = setInterval(() => {
        this.counter -= this.step;
      }, 1000)
    }
  };

  stop(): void {
    clearInterval(this.intervalo);
  };

  reset(): void {
    this.counter = 0;
  };

  activeCountDown(): void {
    this.stop();
    this.countDown = true;
    this.countUp = false;
    this.accumulate();
  };

  activeCount(): void {
    this.stop();
    this.countDown = false;
    this.countUp = true;
    this.accumulate();
  };
}
