import { Component } from '@angular/core';
import { User } from './interfaces/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03_crud';

  userForUpdate: User | undefined;

  sendUserForUpdate(mensaje: User) {
    this.userForUpdate = mensaje;
  }

}
