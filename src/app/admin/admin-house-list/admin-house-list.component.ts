import {Component, Inject, OnInit} from '@angular/core';
import {DealHouse} from '../../model/dealHouse';
import {AdminHouseAddComponent} from '../admin-house-add/admin-house-add.component';
import {MatDialog, MatPaginatorIntl, PageEvent} from '@angular/material';
import {AdminHouseAddDialogComponent} from '../admin-house-add/admin-house-add-dialog.component';
import {User} from '../../model/user';

@Component({
  selector: 'app-admin-house-list',
  templateUrl: './admin-house-list.component.html',
  styleUrls: ['./admin-house-list.component.css']
})
export class AdminHouseListComponent implements OnInit {
  houses =  [
    {title: '碧桂园一期', area: '30', images: null, isPublic: '1', checked: '',
      phone: '18330032576', status: '1', addr: '龙东大道123号'},
    {title: '碧桂园一期', area: '30', images: null, isPublic: '1', checked: '',
      phone: '18330032576', status: '1', addr: '龙东大道123号'},
    {title: '碧桂园一期', area: '30', images: null, isPublic: '1', checked: '',
      phone: '18330032576', status: '1', addr: '龙东大道123号'},
    {title: '碧桂园一期', area: '30', images: null, isPublic: '1', checked: '',
      phone: '18330032576', status: '1', addr: '龙东大道123号'},
    {title: '碧桂园一期', area: '30', images: null, isPublic: '1', checked: '',
      phone: '18330032576', status: '1', addr: '龙东大道123号'}
  ];
  userId: string;
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  constructor(public dialog: MatDialog,
                public matPage: MatPaginatorIntl,
                @Inject('house')private service) {
    this.matPage.itemsPerPageLabel = '每页数量:';
    this.matPage.nextPageLabel = '下一页';
    this.matPage.previousPageLabel = '上一页';

    let user = window.sessionStorage['user'];
    // this.userId = user.id;
  }

  ngOnInit() {
    this.pageSize = 10;
    this.pageNumber = 0;
    this.getPageHouses();
  }

  editDialog(value: DealHouse) {
    let dialogRef = this.dialog.open(AdminHouseAddDialogComponent, {
      width: '70%',
      height: '70%',
      data: {house: value }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  delHouse(id: string) {
    this.service.deleteHouse(id)
      .subscribe(res => {
        if(res.status === 200){
          this.getPageHouses();
        }
      });
  }

  getPageHouses() {
    this.service.getHousesByUser(this.userId, 1, this.pageSize, this.pageNumber, null)
      .subscribe(res => {
        this.houses = res.data;
        this.totalCount = res.totalCount;
      });
  }

  changePage(page: PageEvent) {
    this.pageNumber = page.pageIndex;
    this.pageSize = page.pageSize;
    this.getPageHouses();
  }

}
