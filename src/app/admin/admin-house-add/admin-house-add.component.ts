import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const PHONE_REGX = /^1(3|4|5|7|8)\d{9}$/;

@Component({
  selector: 'app-admin-house-add',
  templateUrl: './admin-house-add.component.html',
  styleUrls: ['./admin-house-add.component.css']
})
export class AdminHouseAddComponent implements OnInit {
  // appModule中导入的模块并不能在子模块中直接使用，还需要导入
  // formControl指令需要FormsModule, ReactiveFormsModule 的支持
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGX)]);

  constructor() { }

  ngOnInit() {
  }

}

