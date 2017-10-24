import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {CommonsModule} from '../common/commons.module';
import {AdminRouteModule} from './admin-route.module';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    AdminRouteModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent
  ]
})
export class AdminModule { }
