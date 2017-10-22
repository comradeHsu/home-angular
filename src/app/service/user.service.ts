import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../model/user';
import {Constant} from '../common/constant';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http ) {}

  findUser(user: User): Observable<User> {
    const url = `${Constant.API_URL}/api/login`;
    return this.http.post(url, user)
      .map(res => {
        let nuser = new User();
        return nuser;
      });
  }
  }
