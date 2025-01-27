import { Component, OnInit } from '@angular/core';
import { User, UserService } from './users/user.service';
import { UsersModule } from "./users/users.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'User Managment System';
  selectedUser: User | null = null;
  userCols = 12;
  formCols = 0;

  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User): void {
    console.log('sono nel appComponent');
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }
  showUserForm(user: User): void {
    this.selectedUser = user;
    this.userCols = 8;
    this.formCols = 4;
  }
}
