import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {Constant} from '../common/constant';
import {Http} from '@angular/http';
import {Response} from '../model/response';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  users: Observable<Response> = new Observable<Response>();

  getUserByPage(pageSize: number, pageNumber: number): Observable<Response> {
    let url = `${Constant.API_URL}/accounts`;
    return this.http.post(url, { pageSize: pageSize, pageNumber: pageNumber})
      .map(res => {
        let response = res.json() as Response;
        return response;
      });
  }

}
