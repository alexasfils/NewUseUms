import { Component, OnInit } from '@angular/core';
import { User, UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'useums';

  users: User[] =[];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User): void {
    console.log('sono nel appComponent');
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }
}
