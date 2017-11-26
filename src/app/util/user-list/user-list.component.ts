import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Output() deletedUser = new EventEmitter<string>();
  constructor() { }

  select = false;

  singleSelect = '';

  index = 0;

  ngOnInit() {
  }

  selectedAll() {
    for(let user of this.users) {
      if (this.select === false) {
        user.checked = 'checked';
      } else {
        user.checked = '';
      }
    }
    this.select = this.select === false ? true : false;
    this.singleSelect = this.select === true ? 'checked' : '';
  }

  selected(user: User) {
    if(user.checked === 'checked') {
      user.checked = '';
    } else {
      user.checked = 'checked';
    }
  }

  deleted(id: string) {
    this.deletedUser.emit(id);
  }

}
