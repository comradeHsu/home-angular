import {Component, Inject, OnInit} from '@angular/core';
import {RentHouse} from '../../model/rentHouse';
import {AdminRentAddDialogComponent} from '../admin-rent-add/admin-rent-add-dialog.component';
import {MatDialog, MatPaginatorIntl, PageEvent} from '@angular/material';

@Component({
  selector: 'app-admin-rent-list',
  templateUrl: './admin-rent-list.component.html',
  styleUrls: ['./admin-rent-list.component.css']
})
export class AdminRentListComponent implements OnInit {
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
  title: string = null;
  constructor(public dialog: MatDialog,
              public matPage: MatPaginatorIntl,
              @Inject('house') private service) {
    this.matPage.itemsPerPageLabel = '每页数量:';
    this.matPage.nextPageLabel = '下一页';
    this.matPage.previousPageLabel = '上一页';
  }

  ngOnInit() {
    this.pageSize = 10;
    this.pageNumber = 0;
    this.getPageHouses();
  }

  editDialog(value: RentHouse) {
    let dialogRef = this.dialog.open(AdminRentAddDialogComponent, {
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
    this.service.getHousesByUser(this.userId, 0, this.pageSize, this.pageNumber, null)
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

  query() {
    this.pageNumber = 0;
    this.service.getHousesByUser(this.userId, 1, this.pageSize, this.pageNumber, this.title)
      .subscribe(res => {
        this.houses = res.data;
        this.totalCount = res.totalCount;
      });
  }

}
