import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';

  password = '';

  constructor() { }

  onSubmit() {
    console.log(this.username, this.password);
  }

}
