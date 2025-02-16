import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router){}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


  deleteUser(user: User): void {
    console.log("Delete User user list component");
    this.userService.userDeleted.next(user);
  }
  updateUser(user: User): void {
    this.router.navigate(['users', user.id]);
  }
}
