import { Component, Input } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: User = {
      name: '',
      lastName: '',
      email: '',
      fiscalCode: '',
      phone: '',
      province: '',
    };
  @Input() counter = 0;

  // constructor() {
  //   this.user = {
  //     name: '',
  //     lastName: '',
  //     email: '',
  //     fiscalCode: '',
  //     phone: '',
  //     province: '',
  //   };
  // }
}
