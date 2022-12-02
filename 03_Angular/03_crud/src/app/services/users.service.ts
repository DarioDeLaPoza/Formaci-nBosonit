import { Injectable } from '@angular/core';
import { USERS } from '../db/users.db';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private arrUsers: User[] = [];
  private id: number = 2;

  constructor() {
    this.arrUsers = USERS;
  };

  getAllUsers(): User[] {
    return this.arrUsers;
  };

  getUserById(id: number): User {
    return this.arrUsers.filter(user => user.id === id)[0];
  };

  insert(newUser: User): void {
    newUser.id = this.id;
    this.arrUsers.push({ ...newUser });
    this.id++;
  };

  updateUser(userForUpdate: User): void {
    let itemIndex = this.arrUsers.findIndex(item => item.id == userForUpdate.id);
    this.arrUsers[itemIndex] = userForUpdate;
  };

  delete(id: number): User[] {
    return this.arrUsers = this.arrUsers.filter(user => user.id !== id);
  };
};
