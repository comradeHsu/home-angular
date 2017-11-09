import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {CommonsModule} from '../common/commons.module';
import {ShareService} from '../service/share.service';

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
  ],
  providers: [
    {provide: 'share', useClass: ShareService}
  ]
})
export class UtilModule { }