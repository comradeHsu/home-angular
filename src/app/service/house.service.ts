import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Constant} from '../common/constant';
import {Response} from '../model/response';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HouseService {

  constructor(private http: Http) { }

  getHousesByUser(userId: string, type: number, pageSize: number, pageNumber: number, title: string): Observable<Response> {
    let url = `${Constant.API_URL}/${userId}/hourses/${type}`;
    let page = title === null ? {pageSize: pageSize, pageNumber: pageNumber} :
      {pageSize: pageSize, pageNumber: pageNumber, title: title};
    return this.http.post(url, page)
      .map(res => res.json() as Response);
  }

}
