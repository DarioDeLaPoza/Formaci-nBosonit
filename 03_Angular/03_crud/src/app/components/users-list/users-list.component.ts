import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/users.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  @Output() userForUpdate: EventEmitter<User> = new EventEmitter();

  constructor(
    private UsersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users = this.UsersService.getAllUsers();
  };

  deleteUser(id: number): void {
    this.users = this.UsersService.delete(id);
  };

  updateUser(id: number) {
    const response = this.UsersService.getUserById(id);
    this.userForUpdate.emit(response);
    console.log(response);
  };
};
