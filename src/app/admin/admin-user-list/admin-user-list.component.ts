import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {MatPaginatorIntl} from '@angular/material';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  totalCount: number;
  constructor(@Inject('user') private service,
              public matPage: MatPaginatorIntl) {
    this.matPage.itemsPerPageLabel = '每页数量:';
    this.matPage.nextPageLabel = '下一页';
    this.matPage.previousPageLabel = '上一页';
  }

  ngOnInit() {
    this.getUsersPage();
  }

  deleteUser(id: string) {
    this.service.deleteUser(id)
      .subscribe(res => {
        if(res.status === 200){
        }
      });
  }

  getUsersPage() {
    this.service.getUserByPage(10, 0)
      .subscribe(res => {
        this.users = res.data;
        this.totalCount = res.totalCount;
      });
  }
}
