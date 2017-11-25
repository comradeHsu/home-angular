/**
 * Created by Administrator on 2017/11/25.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'type'})
export class TypePipe implements PipeTransform {
  transform(value: number): string {
    let status: string;
    switch (value) {
      case 0 :
        status = '业务员';
        break;
      case 1 :
        status = '管理员';
        break;
      default:
        break;
    }
    return status;
  }
}
