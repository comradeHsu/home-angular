import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
/**
 * Created by Administrator on 2017/10/23.
 import { Routes } from "@angular/router/router";

 */
const routes: Routes = [
  {
    path: 'admin/userList',
    canActivate: [],
    component: AdminComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRouteModule { }
