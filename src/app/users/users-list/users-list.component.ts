import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() userDeleted= new EventEmitter<User>();

  ngOnInit(): void {
  }
  trackUser(index: number, user: User): string {
    return user.email;
  }

  deleteUser(user: User) {
    console.log('sono nel userlist');
    this.userDeleted.emit(user);
  }
}
