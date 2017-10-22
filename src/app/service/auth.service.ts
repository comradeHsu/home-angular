import { Injectable } from '@angular/core';
import {Auth} from '../model/auth';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Constant} from '../common/constant';
import {User} from '../model/user';
import {Response} from '../model/response';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  auth: Auth = {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'};

  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<Auth> {
    const url = `${Constant.API_URL}/api/login`;
    let user = new User(username, password);
    return this.http.post(url, user)
      .map(res => {
        let response =  res.json() as Response;
        let auth = new Auth();
        if(response.status === 200) {
          auth.user = user;
          auth.hasError = false;
          auth.errMsg = null;
        } else {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = response.msg;
        }
        this.auth = Object.assign({}, auth);
        this.subject.next(this.auth);
        return this.auth;
      });
  }

}
