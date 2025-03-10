import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UsersListComponent, UserFormComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  exports: [UsersListComponent, UserFormComponent],
})
export class UsersModule {}
