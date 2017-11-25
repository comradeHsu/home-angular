import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  totalCount: number;
  constructor(@Inject('user') private service) { }

  ngOnInit() {
    this.getUsersPage();
  }

  deleteUser(id: string) {

  }

  getUsersPage() {
    this.service.getUserByPage(10, 0)
      .subscribe(res => {
        this.users = res.data;
        this.totalCount = res.totalCount;
      });
  }
}
