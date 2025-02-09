import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  @Output() userDeleted = new EventEmitter<User>();
  @Output() userToBeUpdated = new EventEmitter<User>();

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


  deleteUser(user: User): void {
    console.log('sono nel userlist');
    this.userDeleted.emit(user);
  }
  updateUser(user: User): void {
    this.userToBeUpdated.emit(user);
  }
}
