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
import {AdminHouseAddComponent, UploadDialogComponent} from './admin-house-add/admin-house-add.component';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';
import {ShareService} from '../service/share.service';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    AdminRouteModule,
    FormsModule,
    UtilModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent,
    AdminUserListComponent,
    AdminHouseListComponent,
    AdminHouseAddComponent,
    AdminRentAddComponent,
    AdminRentListComponent,
    UploadDialogComponent
  ],
  entryComponents: [
    UploadDialogComponent,
    AdminHouseAddComponent
  ],
  providers: [
    {provide: 'share', useClass: ShareService}
  ],
})
export class AdminModule { }
