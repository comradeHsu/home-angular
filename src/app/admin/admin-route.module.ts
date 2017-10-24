import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminRentListComponent } from './admin-rent-list/admin-rent-list.component';
import { AdminRentAddComponent } from './admin-rent-add/admin-rent-add.component';
import { AdminHouseListComponent } from './admin-house-list/admin-house-list.component';
import { AdminHouseAddComponent } from './admin-house-add/admin-house-add.component';
import { AdminComponent } from './admin.component';
/**
 * Created by Administrator on 2017/10/23.
 import { Routes } from "@angular/router/router";

 */
const routes: Routes = [
  {
    path: 'admin/userList',
    // canActivate: [],
    component: AdminUserListComponent
  },
  {
    path: 'admin',
    // canActivate: [],
    component: AdminComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
  // declarations: [
  //   AdminUserListComponent,
  //   AdminRentListComponent,
  //   AdminRentAddComponent,
  //   AdminHouseListComponent,
  //   AdminHouseAddComponent,
  //   AdminComponent
  // ]
})
export class AdminRouteModule { }
