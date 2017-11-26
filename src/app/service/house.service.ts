import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Constant} from '../common/constant';
import {Response} from '../model/response';
import {Observable} from 'rxjs/Observable';
import {House} from '../model/house';

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

  deleteHouse(id: string): Observable<Response> {
    let url = `${Constant.API_URL}/delete/${id}`;
    return this.http.delete(url)
      .map(res => res.json() as Response);
  }

  getHouseById(id: string): Observable<House> {
    let url = `${Constant.API_URL}/hourse/${id}`;
    return this.http.get(url)
      .map(res => {
        let response = res.json() as Response;
        return response.data as House;
      });
  }
}
