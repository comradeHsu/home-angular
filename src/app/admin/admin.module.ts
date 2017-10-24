import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {CommonsModule} from '../common/commons.module';
import {AdminRouteModule} from './admin-route.module';
import {AdminComponent} from './admin.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminRentListComponent } from './admin-rent-list/admin-rent-list.component';
import { AdminRentAddComponent } from './admin-rent-add/admin-rent-add.component';
import { AdminHouseListComponent } from './admin-house-list/admin-house-list.component';
import { AdminHouseAddComponent } from './admin-house-add/admin-house-add.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    AdminRouteModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent,
    AdminUserListComponent,
    AdminHouseListComponent,
    AdminHouseAddComponent,
    AdminRentAddComponent,
    AdminRentListComponent
  ]
})
export class AdminModule { }
