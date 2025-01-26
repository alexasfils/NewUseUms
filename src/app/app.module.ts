import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { User, UserService } from './users/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  users?: User[];
  constructor(private userService: UserService) {}

  onDeleteUser(user: User) {
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }

  showUserForm(user: User): void {
    
  }
}
