import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {CommonsModule} from '../common/commons.module';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule
  ],
  declarations: [
    UploadComponent
  ],
  exports: [
    UploadComponent
  ]
})
export class UtilModule { }
