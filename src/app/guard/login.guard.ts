import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    let user = window.sessionStorage.getItem('user');
    if (user != null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
