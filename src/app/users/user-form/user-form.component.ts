import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  user: User | null = null;
  originalUser: Partial<User> = {};
  @Output() updateUser = new EventEmitter<User>();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.originalUser = { ...this.user};
    this.route.paramMap.subscribe((p) => {
      const id = Number(p.get('id'));
      this.user = this.userService.getUser(id);
    });
  }

  onSubmitForm(form: NgForm) {
    const userUpdated = { ...form.value, id: this.user?.id ?? 0 };

    this.updateUser.emit(userUpdated);
    form.reset();
  }
}
