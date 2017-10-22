import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../model/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';

  password = '';

  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  onSubmit() {
    this.service.login(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if(!auth.hasError) {
          // 路由跳转
          this.router.navigate(['todo']);
        }
        });
  }

}
