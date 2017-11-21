/**
 * Created by Administrator on 2017/11/20.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    let status: string;
    switch(value) {
      case 0 :
        status = '已打电话';
        break;
      case 1 :
        status = '交易中';
        break;
      case 2 :
        status = '已付款';
        break;
      case 3 :
        status = '已完成';
        break;
      default:
        break;
    }
    return status;
  }
}
