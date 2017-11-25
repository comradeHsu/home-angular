import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  constructor() { }

  select = false;
  singleSelect = '';

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

}
