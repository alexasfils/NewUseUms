import { Component, Input } from '@angular/core';
import { User } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Input() user: Partial<User> = {};

  onSubmitForm(user: User) {
    console.log(user);
    this.user = {
    }


    console.log(this.user);
    
  };
}
