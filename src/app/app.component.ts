import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from './users/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'User Managment System';
  userCreatedSubscription: Subscription;
  userUpdatedSubscription: Subscription;
  userDeletedSubscription: Subscription;

  users: User[] = [];
  constructor(private userService: UserService) {
    this.userCreatedSubscription = this.userService.userCreated.subscribe(
      (user) => {
        this.onCreateUser(user);
      }
    );

    this.userUpdatedSubscription = this.userService.userUpdated.subscribe(
      (user) => {
        this.onUpdateUser(user);
      }
    );

    this.userDeletedSubscription = this.userService.userDeleted.subscribe(
      (user) => {
        this.deleteUser(user);
      }
    );
  }
  ngOnDestroy(): void {
    this.userCreatedSubscription.unsubscribe();
    this.userUpdatedSubscription.unsubscribe();
    this.userDeletedSubscription.unsubscribe();
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onCreateUser(user: User): void {
    this.userService.createUser(user);
     this.users = this.userService.getUsers();
  }
  onUpdateUser(user: User): void {
    this.userService.updateUser(user);
  }

  deleteUser(user: User): void {
    console.log('sono nel appComponent');
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }
}
