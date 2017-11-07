import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Constant} from '../common/constant';
import {Observable} from 'rxjs/Observable';
import {Response} from '../model/response';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class ShareService {

  subject: ReplaySubject<any> = new ReplaySubject<any>(1);

  token: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor(private http: Http) { }

  getDomin(): Observable<any> {
    let url = `${Constant.API_URL}/token/index.php?r=getDomain`;
    return this.http.get(url)
      .map(res => {
        let response = res.json() as Response;
        let domain = response.data.domain;
        this.subject.next(domain);
        return domain;
      });
  }

  getQiniuToken(): Observable<string> {
    let url = `${Constant.API_URL}/token/index.php?r=getToken`;
    return this.http.get(url)
      .map(res => {
        let response = res.json() as Response;
        let token = response.data.token;
        this.token.next(token);
        return token;
      });
  }

}
