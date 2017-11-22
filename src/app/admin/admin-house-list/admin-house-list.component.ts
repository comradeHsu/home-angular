import { Component, OnInit } from '@angular/core';
import {DealHouse} from '../../model/dealHouse';
import {AdminHouseAddComponent} from '../admin-house-add/admin-house-add.component';
import {MatDialog} from '@angular/material';
import {AdminHouseAddDialogComponent} from '../admin-house-add/admin-house-add-dialog.component';

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
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

}
