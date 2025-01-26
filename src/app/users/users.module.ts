import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserComponent, UsersListComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UserComponent, UsersListComponent],
})
export class UsersModule {}
