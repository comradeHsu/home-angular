import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
