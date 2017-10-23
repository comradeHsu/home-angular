import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {CommonsModule} from '../common/commons.module';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule
  ],
  declarations: [AdminMenuComponent]
})
export class AdminModule { }
