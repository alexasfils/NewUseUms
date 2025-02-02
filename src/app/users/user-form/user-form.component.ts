import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Input() user: Partial<User> = {};
  @Output() updateUser = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  onSubmitForm(form: NgForm) {
    const userUpdated = { ...form.value, id: this.user.id ?? 0 };

    this.updateUser.emit(userUpdated);
    form.reset();
  }
}
