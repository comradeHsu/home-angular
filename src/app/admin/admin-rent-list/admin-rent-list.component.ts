import { Component, OnInit } from '@angular/core';
import {RentHouse} from '../../model/rentHouse';
import {AdminRentAddDialogComponent} from '../admin-rent-add/admin-rent-add-dialog.component';
import {MatDialog} from '@angular/material';

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
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

}
