import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../model/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  photo = '/assets/back.jpg';

  photos = ['/assets/back.jpg', '/assets/back1.jpg', '/assets/back2.jpg', '/assets/back3.jpg'];

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
          window.sessionStorage.setItem('user', auth.user.id);
          this.router.navigate(['admin']);
        }
        });
  }

  toggleImg() {
    let index = Math.floor(Math.random() * this.photos.length);
    this.photo = this.photos[index];
    console.log(index);
  }

}
