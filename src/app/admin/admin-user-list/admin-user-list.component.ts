import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users = [
    {username: '李坤', type: 1, id: '12265362', checked: '', password: ''},
    {username: '李坤', type: 1, id: '12265362', checked: '', password: ''},
    {username: '李坤', type: 1, id: '12265362', checked: '', password: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
