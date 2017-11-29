import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {MatPaginatorIntl, PageEvent} from '@angular/material';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  totalCount: number;
  name: string;
  pageSize: number;
  pageNumber: number;
  constructor(@Inject('user') private service,
              public matPage: MatPaginatorIntl) {
    this.matPage.itemsPerPageLabel = '每页数量:';
    this.matPage.nextPageLabel = '下一页';
    this.matPage.previousPageLabel = '上一页';
  }

  ngOnInit() {
    this.getUsersPage(10, 0);
  }

  deleteUser(id: string) {
    this.service.deleteUser(id)
      .subscribe(res => {
        if(res.status === 200){
        }
      });
  }

  getUsersPage(pageSize: number, pageNumber: number) {
    this.service.getUserByPage(pageSize, pageNumber)
      .subscribe(res => {
        this.users = res.data;
        this.totalCount = res.totalCount;
      });
  }

  query() {
    this.pageNumber = 0;
    this.getUsersPage(this.pageSize, this.pageNumber);
  }

  changePage(page: PageEvent) {
    this.pageNumber = page.pageIndex;
    this.pageSize = page.pageSize;
    this.getUsersPage(this.pageSize, this.pageNumber);
  }
}
