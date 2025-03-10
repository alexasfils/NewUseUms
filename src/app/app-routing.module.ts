import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/create', component: UserFormComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UserFormComponent },
  { path: 'users/:id/show', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
