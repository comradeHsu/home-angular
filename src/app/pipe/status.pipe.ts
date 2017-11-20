/**
 * Created by Administrator on 2017/11/20.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    let status: string;
    switch(value) {
      case 1 :
        status = '已打电话';
        break;
      case 2 :
        break;
      case 3 :
        break;
      case 4 :
        break;
      default:
        break;
    }
    return status;
  }
}
