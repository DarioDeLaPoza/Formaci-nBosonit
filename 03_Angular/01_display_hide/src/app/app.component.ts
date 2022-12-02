import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_display_hide';

  textButton: boolean = true;

  hide(): void {
    this.textButton = !this.textButton;
  };
}
